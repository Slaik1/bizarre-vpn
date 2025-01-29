import { User } from '../../ts/types/user';
import { http } from '../http';

const ENDPOINT = 'user';

export const user = {
  auth: async () => {
    const res = await http.post(ENDPOINT + '/auth');

    const data: User = res.data;

    return data;
  },
  ping: async () => {
    const res = await http.get(`https://bizarre-vpn-api.duckdns.org:8443/ping`);

    return res.data;
  },
};
