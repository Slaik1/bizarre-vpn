import { http } from '../../http';

const ENDPOINT = 'users/auth';

interface Tokens {
  message: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export const auth = {
  postRefreshTokens: async (refreshToken: string) => {
    const res = await http.post(ENDPOINT + '/refresh-tokens', { refreshToken });

    const data: Tokens = res.data;

    return data;
  },
  postTelegramInitData: async (initDataStr: string) => {
    const res = await http.post(ENDPOINT + '/telegram-init-data', {
      initDataStr,
    });

    const data: Tokens = res.data;

    return data;
  },
};
