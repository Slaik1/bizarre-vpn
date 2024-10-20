import { FC, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import StorePage from '../../pages/StorePage';
import Layout from '../Layout';
import Preloader from '../Preloader';
import ThemeProvider from '../ThemeProvider';
import { useTelegram } from '../../hooks/useTelegram';

const HelpPage = lazy(() => import('../../pages/HelpPage'));

const App: FC = () => {
  const { appReady} = useTelegram();

  useEffect(() => {
    appReady();
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
