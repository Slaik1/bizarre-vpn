import { observer } from 'mobx-react-lite';
import { FC, ReactNode, useEffect, useRef } from 'react';

import layoutStore from '../../stores/LayoutStore';
import Navigation from '../Navigation';

import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    layoutStore.setMainRef(mainRef);
  }, []);

  return (
    <>
      <main ref={mainRef} className={styles.section}>
        {children}
      </main>
      <Navigation />
    </>
  );
};

export default observer(Layout);
