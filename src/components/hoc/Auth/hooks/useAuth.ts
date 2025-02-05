import { useEffect, useState } from 'react';

import api from '../../../../api';
import tryCatchWrapper from '../../../../helpers/tryCatchWrapper';
import { rootStore } from '../../../../stores/RootStore';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const checkAuth = tryCatchWrapper(
    async () => {
      const accessToken = await api.user.auth.postRefreshToken();

      rootStore.userStore.setAccessToken(accessToken)

      const user = await api.user.getUserSelf();

      rootStore.userStore.setUser(user);
    },
    {
      onLoadStart: () => setIsLoading(true),
      onLoadEnd: () => setIsLoading(false),
    }
  );

  useEffect(() => {
    checkAuth();
  }, []);

  return { isLoading };
};
