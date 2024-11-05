import { useEffect, useState } from 'react';
import { useTelegram } from '../../../../hooks/useTelegram';
import tryCatchWrapper from '../../../../helpers/tryCatchWrapper';
import api from '../../../../api';
import userStore from '../../../../stores/UserStore';

export const useAuth = () => {
  const [isUserExist, setIsUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, tg } = useTelegram();

  const checkAuth = () => {
    const params = {
      isBot: user?.is_bot || false,
      languageCode: tg.initDataUnsafe?.query?.language_code || 'en',
      telegramId: user?.id,
      username: user?.username,
    };

    tryCatchWrapper(
      async () => {
        const data = await api.user.auth(params);

				userStore.setUser(data)

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
