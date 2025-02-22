export enum Pages {
  Home = '/home',
  Store = '/store',
  Help = '/help',
  Login = '/login',
  AdminLinks = '/admin',
  AdminUsers = '/admin/users',
  AdminPlans = '/admin/plans',
  AdminServers = '/admin/servers',
}

export const PAGES_ROUTES: string[] = Array.from(
  new Set(Object.values(Pages).map((route) => route.split('/')[1]))
);

export type PagesType = (typeof Pages)[keyof typeof Pages];
