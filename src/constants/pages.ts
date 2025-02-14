export enum Pages {
  Home = '/',
  Store = '/store',
  Help = '/help',
  Login = '/login',
}

export type PagesType = typeof Pages[keyof typeof Pages];
