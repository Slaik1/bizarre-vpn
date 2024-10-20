import '@mantine/core/styles.css';
import '../../assets/styles/index.scss';
import { MantineProvider } from '@mantine/core';
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
        styles: (theme) => ({
          root: {
            color: '#fff',
            background: 'var(--tg-theme-button-color)',
          },
        }),
      },
      Card: {
        styles: (theme) => ({
          root: {
            background: 'var(--tg-theme-secondary-bg-color)',
          },
        }),
      },
      Text: {
        styles: (theme) => ({
          root: {
            color: 'var(--tg-theme-text-color)',
          },
        }),
      },
    },
  };

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
