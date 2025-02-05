import { http } from '../../http';

const ENDPOINT = 'users/auth';

export const auth = {
  postRefreshToken: async () => {
    const res = await http.post(ENDPOINT + '/refresh-tokens', null, {
      withCredentials: true,
    });

    const data = res.data.accessToken;

    return data;
  },
  postTelegramInitData: async (initDataStr: string) => {
    const res = await http.post(ENDPOINT + '/telegram-init-data', {
      initDataStr,
    });

    const data = res.data.accessToken;

    return data;
  },
};
