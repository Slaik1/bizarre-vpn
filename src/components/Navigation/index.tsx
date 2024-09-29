// Navigation.jsx
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { IoHomeOutline } from 'react-icons/io5';
import { IoMdHelp } from 'react-icons/io';
import { MdAttachMoney } from 'react-icons/md';
import classNames from 'classnames';

const getNavLinkClass = (isActive: boolean) =>
  classNames(styles.navButton, { [styles.active]: isActive });

const Navigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)} end>
        <IoHomeOutline size={25} />
      </NavLink>
      <NavLink to="/store" className={({ isActive }) => getNavLinkClass(isActive)}>
        <MdAttachMoney size={25} />
      </NavLink>
      <NavLink to="/help" className={({ isActive }) => getNavLinkClass(isActive)}>
        <IoMdHelp size={25} />
      </NavLink>
    </nav>
  );
};

export default Navigation;
