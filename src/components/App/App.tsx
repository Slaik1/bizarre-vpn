import { FC, Suspense, lazy } from 'react';
import '@mantine/core/styles.css';
import '../../assets/styles/index.scss';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Preloader from '../Preloader';

const HomePage = lazy(() => import('../../pages/HomePage'));
const StorePage = lazy(() => import('../../pages/StorePage'));
const HelpPage = lazy(() => import('../../pages/HelpPage'));

const App: FC = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/store" element={<StorePage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
