import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  deleteMarkdownPostApiClient,
  updateMarkdownPostApiClient,
} from '../../../../api/clients/markdownPosts';
import { paths } from '../../../../config/paths';
import { colors } from '../../../../styles/variables';
import { CreateMarkdownPostApiRequest } from '../../../../types/api/markdownPosts';
import { MarkdownPost } from '../../../../types/markdownPost';
import AdminCancelButton from '../../../atoms/admin/AdminCancelButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import DeleteIcon from '../../../atoms/icons/DeleteIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  markdownPost: MarkdownPost | null;
};

const DeleteButton = styled(BasicButton)`
  color: ${colors.error};
  fill: ${colors.error};
`;

const UpdateButton = styled(BasicButton)``;

const AdminMarkdownPostEditTemplate: React.VFC<Props> = ({ markdownPost }) => {
  const router = useRouter();

  if (markdownPost === null) {
    router.push(paths.notFound);
    return null;
  }

  const [title, setTitle] = useState(markdownPost ? markdownPost.title : '');
  const [body, setBody] = useState(markdownPost ? markdownPost.body : '');

  const onClickUpdate = useCallback(
    async (id: number, markdownPost: CreateMarkdownPostApiRequest) => {
      try {
        const confirm = window.confirm(`記事を更新しますか？`);
        if (confirm) {
          await updateMarkdownPostApiClient(id, markdownPost);
          alert('更新が完了しました。');
          router.push(paths.admin.markdownPosts.index);
        }
      } catch (e) {
        console.error(e);
        alert('更新に失敗しました。');
      }
    },
    [],
  );

  const onClickDelete = useCallback(async (id: number) => {
    try {
      const confirm = window.confirm('記事を削除しますか？');
      if (confirm) {
        await deleteMarkdownPostApiClient(id);
        alert('記事を削除しました。');
        router.push(paths.admin.markdownPosts.index);
      }
    } catch (e) {
      console.error(e);
      alert('記事の削除に失敗しました。');
    }
  }, []);

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>マークダウン記事編集</AdminPageTitle>

      <AdminMarkdownPostEditor
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
      />

      <AdminBottomActionBar>
        <AdminCancelButton pathToBack={paths.admin.markdownPosts.index}>
          やめる
        </AdminCancelButton>
        <DeleteButton
          onClick={() => onClickDelete(markdownPost.id)}
          icon={<DeleteIcon />}
        >
          記事を削除
        </DeleteButton>
        <UpdateButton
          onClick={() =>
            onClickUpdate(markdownPost.id, { title: title, body: body })
          }
          icon={<SendIcon />}
        >
          記事を更新
        </UpdateButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostEditTemplate;
