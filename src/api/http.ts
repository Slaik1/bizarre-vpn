import axios, { isAxiosError } from 'axios';
// eslint-disable-next-line no-duplicate-imports
import type { AxiosRequestConfig, AxiosError } from 'axios';

import { CONFIG } from '../constants/config';
import { rootStore } from '../stores/RootStore';

import api from '.';

const requestSettings: AxiosRequestConfig = {
  baseURL: CONFIG.baseUrl,
  withCredentials: true,
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
        const tokens = await api.user.auth.postRefreshToken();

        if (!tokens) throw new Error('Запрос не вернул токены');

        rootStore.userStore.setAccessToken(tokens.accessToken);

        return http.request(originalRequest);
      } catch (e) {
        window.location.href = '/login';
      }
    }
    throw error;
  }
);
