import { useEffect, useState } from 'react';

import api from '../../../../api';
import tryCatchWrapper from '../../../../helpers/tryCatchWrapper';
import { rootStore } from '../../../../stores/RootStore';

export const useAuth = () => {
  const [isUserExist, setIsUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkAuth = () => {
    tryCatchWrapper(
      async () => {
        const data = await api.user.auth();

        rootStore.userStore.setUser(data);

        setIsUserExist(true);
      },
      {
        onLoadStart: () => setIsLoading(true),
        onLoadEnd: () => setIsLoading(false),
      }
    )();
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { isLoading, isUserExist };
};
