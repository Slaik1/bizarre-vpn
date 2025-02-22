import { t } from 'i18next';
import { FC } from 'react';

import { rootStore } from '../../stores/RootStore';

import { ADMIN_NAV_LINKS, SYSTEM_NAV_LINKS } from './constants';
import LinkContent from './LinkContent';

import cl from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <nav className={cl.nav}>
      {SYSTEM_NAV_LINKS.map(({ icon: Icon, route, titleKey }, i) => (
        <LinkContent Icon={Icon} title={t(titleKey)} to={route} key={i} />
      ))}

      {rootStore.userStore.user?.role === 'admin' &&
        ADMIN_NAV_LINKS.map(({ icon: Icon, route, titleKey }, i) => (
          <LinkContent Icon={Icon} title={t(titleKey)} to={route} key={i} />
        ))}
    </nav>
  );
};

export default Navigation;
