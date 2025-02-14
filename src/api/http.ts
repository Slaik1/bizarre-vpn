import axios, { isAxiosError } from 'axios';
// eslint-disable-next-line no-duplicate-imports
import type {
  AxiosRequestConfig,
  AxiosError,
  AxiosRequestHeaders,
} from 'axios';
import { Navigate } from 'react-router-dom';

import { CONFIG } from '../constants/config';
import { Pages } from '../constants/pages';
import { rootStore } from '../stores/RootStore';

import api from '.';
//@ts-ignore
const HEADERS: AxiosRequestHeaders = {
  // 'Content-Type': 'application/json',
  // 'Access-Control-Allow-Origin': '*',
};

const requestSettings: AxiosRequestConfig = {
  baseURL: CONFIG.baseUrl,
  headers: HEADERS,
};

export const isAxiosErrorGuard = (e: unknown): e is AxiosError =>
  isAxiosError(e);

export const http = axios.create(requestSettings);

http.interceptors.request.use((config: any) => {
  const accessToken = rootStore.userStore?.accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

http.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const token = await api.user.auth.postRefreshToken();

        if (!token) throw new Error('Запрос не вернул токен');

        rootStore.userStore.setAccessToken(token);

        return await http.request(originalRequest);
      } catch (e) {
        Navigate({ to: Pages.Login });
      }
    }
    throw error;
  }
);
