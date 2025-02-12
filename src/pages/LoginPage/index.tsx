import { FC, useEffect, useState } from 'react';

import api from '../../api';
import Preloader from '../../components/Preloader';
import tryCatchWrapper from '../../helpers/tryCatchWrapper';
import { rootStore } from '../../stores/RootStore';
import notify from '../../utils/notify';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const updateTokens = tryCatchWrapper(
    async () => {
      const token = await api.user.auth.postTelegramInitData();

      rootStore.userStore.setAccessToken(token)
      navigate('/');
    },
    {
      setIsLoading: setIsLoading,
      errorHandler: () => notify.error('Перезайдите в приложение'),
    }
  );

  useEffect(() => {
    if (!rootStore.telegramStore.tg) return;
    updateTokens();
  }, []);

  if (isLoading) return <Preloader />;

  return <div>Страница авторизации</div>;
};

export default observer(LoginPage);
