import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import cl from './LinkContent.module.scss';

interface LinkContentProps {
  Icon: FC<{ className?: string }>;
  to: string;
  title: string;
}

const LinkContent: FC<LinkContentProps> = ({ Icon, title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cl.navButton, { [cl.active]: isActive })
      }
    >
      <Icon className={cl.icon} />
      <p className={cl.title}>{title}</p>
    </NavLink>
  );
};

export default LinkContent;
