import { useEffect, useState } from 'react';

import tryCatchWrapper from '../../../../../helpers/tryCatchWrapper';
import { User } from '../../../../../ts/types/user';
import notify from '../../../../../utils/notify';

import { MOCK_USERS } from './mockData';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = tryCatchWrapper(
    async () => {
      const users = MOCK_USERS;

      setUsers(users);
    },
    {
      setIsLoading: setIsLoading,
      errorHandler: () => notify.error('Ошибка получения пользователей'),
    }
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isLoading };
};
