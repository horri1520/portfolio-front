import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useGetCategorySelectorOptions } from '../../../../hooks/categories';
import { useMarkdownPostAdminApiClients } from '../../../../hooks/markdownPosts';
import { AdminForm, AdminFormItemWrapper } from '../../../../styles/components';
import { Category } from '../../../../types/category';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledSelector from '../../../molecules/admin/AdminLabeledSelector';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  categories: Category[];
};

const AdminMarkdownPostNewTemplate: React.VFC<Props> = ({ categories }) => {
  const router = useRouter();
  const getCategorySelectorOptions = useGetCategorySelectorOptions();
  const markdownPostAdminApiClients = useMarkdownPostAdminApiClients();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [categoryId, setCategoryId] = useState('1');

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規マークダウン記事</AdminPageTitle>

      <AdminForm>
        <AdminFormItemWrapper>
          <AdminLabeledSelector
            label="カテゴリ"
            value={categoryId}
            setValue={setCategoryId}
            options={getCategorySelectorOptions(categories)}
          />
        </AdminFormItemWrapper>

        <AdminMarkdownPostEditor
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
        />
      </AdminForm>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.markdownPosts.index)}
          icon={<ClearIcon />}
          color="red"
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          onClick={() =>
            markdownPostAdminApiClients.postMarkdownPost(
              title,
              body,
              categoryId,
            )
          }
          icon={<SendIcon />}
        >
          投稿
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostNewTemplate;
