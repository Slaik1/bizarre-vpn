import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import cl from './AdminPanelLinksPage.module.scss';

const AdminPanelPageLinks: FC = () => {
  return (
    <div className={cl.adminPageLinks}>
      <NavLink className={cl.link} to={'/admin/users'}>Пользователи</NavLink>
      <NavLink className={cl.link} to={'/admin/servers'}>Сервера</NavLink>
      <NavLink className={cl.link} to={'/admin/plans'}>Планы</NavLink>
    </div>
  );
};

export default AdminPanelPageLinks;
