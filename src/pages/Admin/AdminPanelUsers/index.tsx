import { FC } from 'react';
import Users from './Users';
import Filters from './Filters';
import UsersPagination from './UsersPagination';
import cl from './AdminPanelUsers.module.scss'
const AdminPanelUsers: FC = () => {
  return (
    <div className={cl.adminPanelUsersContainer}>
      <div>
        <Filters />
        <Users />
      </div>
      <UsersPagination />
    </div>
  );
};

export default AdminPanelUsers;
