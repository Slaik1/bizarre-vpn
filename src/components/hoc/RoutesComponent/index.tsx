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
import AdminGuard from '../AdminGuard';
import AuthGuard from '../AuthGuard';

const HelpPage = lazy(() => import('../../../pages/HelpPage'));
const AdminPageLinks = lazy(
  () => import('../../../pages/Admin/AdminPageLinks')
);
const AdminPagePlans = lazy(
  () => import('../../../pages/Admin/AdminPagePlans')
);
const AdminPageServers = lazy(
  () => import('../../../pages/Admin/AdminPageServers')
);
const AdminPageUsers = lazy(
  () => import('../../../pages/Admin/AdminPageUsers')
);

type SystemRoutes = Exclude<
  Pages,
  `${typeof Pages.AdminLinks}${string}` | typeof Pages.Login
>;
type AdminRoutes = Extract<Pages, `${typeof Pages.AdminLinks}${string}`>;
type AuthRoutes = Extract<Pages, typeof Pages.Login>;

const SYSTEM_ROUTES: Record<SystemRoutes, React.ReactNode> = {
  [Pages.Home]: <HomePage />,
  [Pages.Store]: <StorePage />,
  [Pages.Help]: <HelpPage />,
};

const ADMIN_ROUTES: Record<AdminRoutes, React.ReactNode> = {
  [Pages.AdminLinks]: <AdminPageLinks />,
  [Pages.AdminUsers]: <AdminPageUsers />,
  [Pages.AdminPlans]: <AdminPagePlans />,
  [Pages.AdminServers]: <AdminPageServers />,
};

const AUTH_ROUTES: Record<AuthRoutes, React.ReactNode> = {
  [Pages.Login]: <LoginPage />,
};

const SystemLayout: FC = () => (
  <AuthGuard>
    <Layout>
      <Outlet />
    </Layout>
  </AuthGuard>
);

const AdminLayout: FC = () => (
  <AuthGuard>
    <AdminGuard>
      <Layout>
        <Outlet />
      </Layout>
    </AdminGuard>
  </AuthGuard>
);

const RoutesComponent: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route element={<SystemLayout />}>
            {Object.entries(SYSTEM_ROUTES).map(([path, el]) => (
              <Route key={path} path={path} element={el} />
            ))}
          </Route>

          <Route path={Pages.AdminLinks} element={<AdminLayout />}>
            {Object.entries(ADMIN_ROUTES).map(([path, el]) => (
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
