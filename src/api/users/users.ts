import { User } from '../../ts/types/user';
import { http } from '../http';

import { auth } from './auth/auth';

const ENDPOINT = 'users';

export const user = {
  auth,
  getUsers: async () => {
    const res = await http.get(ENDPOINT);

    const data: User = res.data;

    return data;
  },
  getUsersList: async () => {
    const res = await http.get(ENDPOINT + '/list');

    const data: User[] = res.data;

    return data;
  },
};
