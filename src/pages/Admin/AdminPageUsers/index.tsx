import { FC } from 'react';

import Filters from './Filters';
import Users from './Users';

import cl from './AdminPageUsers.module.scss';

const AdminPageUsers: FC = () => {
  return (
    <div className={cl.adminPanelUsersContainer}>
      <div className={cl.filtersWrapper}>
        <h2>Пользователи</h2>
        <Filters />
      </div>
      <Users />
    </div>
  );
};

export default AdminPageUsers;
