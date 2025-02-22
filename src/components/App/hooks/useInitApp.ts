import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { rootStore } from '../../../stores/RootStore';

export const useInitApp = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const init = async () => {
    setIsLoading(true);

    await i18n.changeLanguage(rootStore.telegramStore.getUserLanguage());

    console.log('i18n.languages', i18n.languages);

    rootStore.telegramStore.setAppReady();
    if (rootStore.userStore.device === 'phone')
      rootStore.telegramStore.setAppFullScreen();

    setIsLoading(false);
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading;
};
