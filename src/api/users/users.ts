import { http } from '../http';

const ENDPOINT = 'user';

interface AuthParams {
  isBot: boolean;
  languageCode: string;
  telegramId: number;
  username: string;
}

export const user = {
  auth: async (params: AuthParams) => {
    const { isBot, languageCode, telegramId, username } = params;

    const res = await http.post(ENDPOINT + '/auth', {
      isBot,
      languageCode,
      telegramId,
      username,
    });

    const data: AuthParams = res.data;
    
    return data
  },
  ping: async () => {

    const res = await http.get(ENDPOINT + '/ping');

    return res.data
  },

};
