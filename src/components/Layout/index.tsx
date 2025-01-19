import { observer } from 'mobx-react-lite';
import { FC, ReactNode, useEffect, useRef } from 'react';

import { useTelegram } from '../../hooks/useTelegram';
import layoutStore from '../../stores/LayoutStore';
import Auth from '../hoc/Auth';
import Navigation from '../Navigation';

import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef(null);
  const { user } = useTelegram();

  useEffect(() => {
    layoutStore.setMainRef(mainRef);
  }, [user]);

  return (
    <Auth>
      <main ref={mainRef} className={styles.section}>
        {children}
      </main>
      <Navigation />
    </Auth>
  );
};

export default observer(Layout);
