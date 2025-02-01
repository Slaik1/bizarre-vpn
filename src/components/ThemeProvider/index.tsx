import '@mantine/core/styles.css';
import '../../assets/styles/index.scss';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { FC, ReactNode } from 'react';

import { rootStore } from '../../stores/RootStore';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = {
    colorScheme: rootStore.telegramStore.tg?.colorScheme || 'dark',
    components: {
      Button: {
        styles: () => ({
          root: {
            color: '#fff',
            background: 'var(--primary-color)',
          },
        }),
      },
      Card: {
        styles: () => ({
          root: {
            background: 'var(--bg-color)',
          },
        }),
      },
      Text: {
        styles: () => ({
          root: {
            color: 'var(--text-color)',
          },
        }),
      },
    },
  };

  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-center" limit={3} />
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
