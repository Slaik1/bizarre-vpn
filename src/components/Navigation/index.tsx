import classNames from 'classnames';
import { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { getNavLinks } from './helpers';

import cl from './Navigation.module.scss';

const Navigation: FC = () => {
  const links = useMemo(() => getNavLinks(), []);

  return (
    <nav className={cl.nav}>
      {links.map(({ icon: Icon, route, title }) => (
        <NavLink
          to={route}
          key={route}
          className={({ isActive }) =>
            classNames(cl.navButton, { [cl.active]: isActive })
          }
        >
          <Icon className={cl.icon}/>
          <p className={cl.title}>{title}</p>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
