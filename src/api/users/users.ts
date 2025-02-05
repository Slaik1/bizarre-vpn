import { User } from '../../ts/types/user';
import { http } from '../http';

const ENDPOINT = 'user';

export const user = {
  getUsers: async () => {
    const res = await http.post(ENDPOINT);

    const data: User = res.data;

    return data;
  },
};
