import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../../config/paths';
import { colors } from '../../../../styles/variables';
import { MarkdownPost } from '../../../../types/markdownPost';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import NextLink from '../../../atoms/NextLink';
import Time from '../../../atoms/Time';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  markdownPosts: MarkdownPost[];
};

const Table = styled.table`
  display: inline-block;
  width: 100%;
  padding: 48px 0;
`;

const THead = styled.thead`
  padding: 16px 0;
`;

const TableHeader = styled.th`
  padding: 0 8px;
`;

const TBody = styled.tbody``;

const TableRow = styled.tr``;

const TableData = styled.td`
  padding: 0 8px;
`;

const EditLink = styled(NextLink)`
  color: ${colors.defaultBlue};
`;

const BackButton = styled(BasicButton)``;

const CreateButton = styled(BasicButton)``;

const AdminMarkdownPostsIndexTemplate: React.VFC<Props> = ({
  markdownPosts,
}) => {
  const router = useRouter();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>マークダウン記事管理</AdminPageTitle>

      <Table>
        <THead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>タイトル</TableHeader>
            <TableHeader>本文</TableHeader>
            <TableHeader>作成日時</TableHeader>
            <TableHeader>更新日時</TableHeader>
            <TableHeader>操作</TableHeader>　
          </TableRow>
        </THead>

        <TBody>
          {markdownPosts.map((markdownPost, index) => (
            <TableRow key={index}>
              <TableData>{markdownPost.id}</TableData>
              <TableData>{markdownPost.title}</TableData>
              <TableData>{markdownPost.body.slice(0, 80)}</TableData>
              <TableData>
                <Time datetime={markdownPost.createdAt} />
              </TableData>
              <TableData>
                <Time datetime={markdownPost.updatedAt} />
              </TableData>
              <TableData>
                <EditLink
                  href={`${paths.admin.markdownPosts.index}/${markdownPost.id}/edit`}
                >
                  編集
                </EditLink>
              </TableData>
            </TableRow>
          ))}
        </TBody>
      </Table>

      <AdminBottomActionBar>
        <BackButton onClick={() => router.push(paths.admin.index)}>
          戻る
        </BackButton>
        <CreateButton
          onClick={() => router.push(paths.admin.markdownPosts.new)}
        >
          記事を書く
        </CreateButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostsIndexTemplate;
