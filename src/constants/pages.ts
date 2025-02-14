export enum Pages {
  Home = '/home',
  Store = '/store',
  Help = '/help',
  Login = '/login',
}

export const PAGES_ROUTES: string[] = Object.values(Pages).map((route) =>
  route.slice(1)
);

export type PagesType = (typeof Pages)[keyof typeof Pages];
