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
  const { appReady, user, tg } = useTelegram();
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = user?.language_code || FALLBACK_LANGUAGE;

    tg.requestFullscreen()

    // tg.showScanQrPopup('hello')

    i18n.changeLanguage(userLanguage);
    appReady();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider>
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
