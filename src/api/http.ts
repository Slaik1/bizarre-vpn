import axios, { isAxiosError } from 'axios';
// eslint-disable-next-line no-duplicate-imports
import type { AxiosRequestConfig, AxiosError } from 'axios';

import { CONFIG } from '../constants/config';

const requestSettings: AxiosRequestConfig = {
  baseURL: CONFIG.baseUrl,
};

export const isAxiosErrorGuard = (e: unknown): e is AxiosError =>
  isAxiosError(e);

export const http = axios.create(requestSettings);
