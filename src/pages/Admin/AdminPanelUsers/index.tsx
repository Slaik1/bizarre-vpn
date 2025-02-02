import { FC } from 'react';

import Filters from './Filters';
import Users from './Users';
import UsersPagination from './UsersPagination';

import cl from './AdminPanelUsers.module.scss';

const AdminPanelUsers: FC = () => {
  return (
    <div className={cl.adminPanelUsersContainer}>
      <div className={cl.filtersWrapper}>
        <h2>Пользователи</h2>
        <Filters />
      </div>
      <Users />
      <UsersPagination />
    </div>
  );
};

export default AdminPanelUsers;
