import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import api from '../../api';
import Preloader from '../../components/Preloader';
import { Pages } from '../../constants/pages';
import tryCatchWrapper from '../../helpers/tryCatchWrapper';
import { rootStore } from '../../stores/RootStore';
import notify from '../../utils/notify';

const LoginPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('login');

  const updateTokens = tryCatchWrapper(
    async () => {
      const token = await api.user.auth.postTelegramInitData();

      rootStore.userStore.setAccessToken(token);
      navigate(Pages.Home);
    },
    {
      setIsLoading: setIsLoading,
      errorHandler: () => notify.error(t('tg.text')),
    }
  );

  useEffect(() => {
    if (!rootStore.telegramStore.isTelegramWebApp) return;
    updateTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Preloader />;

  if (rootStore.telegramStore.isTelegramWebApp) return <h1>{t('tg.text')}</h1>;

  return <div>{t('web.text')}</div>;
};

export default observer(LoginPage);
