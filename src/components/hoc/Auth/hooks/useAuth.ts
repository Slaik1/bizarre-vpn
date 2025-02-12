import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../../api';
import tryCatchWrapper from '../../../../helpers/tryCatchWrapper';
import { rootStore } from '../../../../stores/RootStore';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const checkAuth = tryCatchWrapper(
    async () => {
      if (!rootStore.userStore.accessToken) {
        const token = await api.user.auth.postRefreshToken();

        if (!token) throw new Error('Запрос не вернул токен');

        rootStore.userStore.setAccessToken(token);
      }

      const user = await api.user.getUserSelf();

      rootStore.userStore.setUser(user);
    },
    {
      setIsLoading: setIsLoading,
      errorHandler: () => navigate('login'),
    }
  );

  useEffect(() => {
    checkAuth();
  }, []);

  return { isLoading };
};
