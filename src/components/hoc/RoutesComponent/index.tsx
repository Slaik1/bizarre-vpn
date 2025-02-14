import { FC, lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import { Pages } from '../../../constants/pages';
import HomePage from '../../../pages/HomePage';
import LoginPage from '../../../pages/LoginPage';
import StorePage from '../../../pages/StorePage';
import Layout from '../../Layout';
import Preloader from '../../Preloader';
import Auth from '../Auth';
const HelpPage = lazy(() => import('../../../pages/HelpPage'));

type SystemRoutes = Exclude<Pages, typeof Pages.Login>;
type AuthRoutes = Extract<Pages, typeof Pages.Login>;

const SYSTEM_ROUTES: Record<SystemRoutes, React.ReactNode> = {
  [Pages.Home]: <HomePage />,
  [Pages.Store]: <StorePage />,
  [Pages.Help]: <HelpPage />,
};

const AUTH_ROUTES: Record<AuthRoutes, React.ReactNode> = {
  [Pages.Login]: <LoginPage />,
};

const AuthLayout: FC = () => (
  <Auth>
    <Layout>
      <Outlet />
    </Layout>
  </Auth>
);

const RoutesComponent: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route element={<AuthLayout />}>
            {Object.entries(SYSTEM_ROUTES).map(([path, el]) => (
              <Route key={path} path={path} element={el} />
            ))}
          </Route>
          {Object.entries(AUTH_ROUTES).map(([path, el]) => (
            <Route key={path} path={path} element={el} />
          ))}
          <Route path="*" element={<Navigate to={Pages.Home} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesComponent;
