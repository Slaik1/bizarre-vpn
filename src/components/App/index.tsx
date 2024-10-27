import { Notifications } from '@mantine/notifications';
import { FC, Suspense, lazy, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FALLBACK_LANGUAGE } from '../../constants/user';
import { useTelegram } from '../../hooks/useTelegram';
import HomePage from '../../pages/HomePage';
import StorePage from '../../pages/StorePage';
import Layout from '../Layout';
import Preloader from '../Preloader';
import ThemeProvider from '../ThemeProvider';

const HelpPage = lazy(() => import('../../pages/HelpPage'));

const App: FC = () => {
  const { appReady, user } = useTelegram();
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = user?.language_code || FALLBACK_LANGUAGE;

    i18n.changeLanguage(userLanguage);
    appReady();
  }, []);

  return (
    <ThemeProvider>
      <Notifications />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/help" element={<HelpPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
