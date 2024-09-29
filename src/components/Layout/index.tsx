// src/components/Layout.tsx
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import Navigation from '../Navigation';

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>Bizarre VPN</header>
      <main className={styles.section}>
				{children}
      </main>
      <Navigation/>
    </div>
  );
};

export default Layout;
