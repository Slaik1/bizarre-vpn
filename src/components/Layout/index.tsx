import { observer } from 'mobx-react-lite';
import { FC, ReactNode, useEffect, useRef } from 'react';

import { rootStore } from '../../stores/RootStore';
import Navigation from '../Navigation';

import styles from './Layout.module.scss';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    rootStore.layoutStore.setMainRef(mainRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootStore.telegramStore.user]);

  return (
    <Auth>
      <div style={{ height: '100dvh', width: '100dvw' }}>
        <main
          ref={mainRef}
          className={styles.section}
          style={{
            paddingTop: rootStore.userStore.device === 'phone' ? 75 : 16,
          }}
        >
          {children}
        </main>
        <Navigation />
      </div>
    </Auth>
  );
};

export default observer(Layout);
