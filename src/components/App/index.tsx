import { observer } from 'mobx-react-lite';
import { FC, Suspense, lazy, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import StorePage from '../../pages/StorePage';
import { rootStore } from '../../stores/RootStore';
import Layout from '../Layout';
import Preloader from '../Preloader';
import ThemeProvider from '../ThemeProvider';

const HelpPage = lazy(() => import('../../pages/HelpPage'));

const App: FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(rootStore.telegramStore.getUserLanguage());
    rootStore.telegramStore.setAppReady();
    if (rootStore.userStore.device === 'phone')
      rootStore.telegramStore.setAppFullScreen();
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
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default observer(App);
