import classNames from 'classnames';
import { FC } from 'react';
import { IoMdHelp } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { MdAttachMoney } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const getNavLinkClass = (isActive: boolean) =>
  classNames(styles.navButton, { [styles.active]: isActive });

const Navigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => getNavLinkClass(isActive)}
        end
      >
        <IoHomeOutline size={25} />
      </NavLink>
      <NavLink
        to="/store"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        <MdAttachMoney size={25} />
      </NavLink>
      <NavLink
        to="/help"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        <IoMdHelp size={25} />
      </NavLink>
    </nav>
  );
};

export default Navigation;
