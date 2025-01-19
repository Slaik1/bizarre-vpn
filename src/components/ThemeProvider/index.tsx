import '@mantine/core/styles.css';
import '../../assets/styles/index.scss';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { FC, ReactNode } from 'react';

import { useTelegram } from '../../hooks/useTelegram';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { tg } = useTelegram();

  const theme = {
    colorScheme: tg?.colorScheme || 'dark',
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
      Notification: {
        styles: () => ({
          root: {
            maxWidth: 400,
          },
        }),
      },
    },
  };

  return (
    <MantineProvider theme={theme}>
      <Notifications position="bottom-left" />
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
