import React from 'react';
import { paths } from '../../../../config/paths';
import AdminBackButton from '../../../atoms/admin/AdminBackButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

const AdminUsersIndexTemplate: React.VFC = () => {
  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>Adminユーザー管理</AdminPageTitle>

      <AdminBottomActionBar>
        <AdminBackButton pathToBack={paths.admin.index}>戻る</AdminBackButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminUsersIndexTemplate;
