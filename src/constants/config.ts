import { IS_DEV } from './constants';

export const CONFIG = {
  baseUrl: IS_DEV
    ? 'https://077d-2a12-5940-2ee5-00-2.ngrok-free.app'
    : 'bizarre-pleasure.duckdns.org/api',
};
