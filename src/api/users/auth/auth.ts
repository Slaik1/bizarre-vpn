import { rootStore } from '../../../stores/RootStore';
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
  postTelegramInitData: async () => {
    const res = await http.post(
      ENDPOINT + '/telegram-init-data',
      {
        initDataStr: rootStore.telegramStore.tg.initData,
      },
      { withCredentials: true }
    );

    const data = res.data.accessToken;

    return data;
  },
};
