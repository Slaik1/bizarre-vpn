import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { rootStore } from "../../../stores/RootStore";

export const useInitApp = () => {
	const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(rootStore.telegramStore.getUserLanguage());
    rootStore.telegramStore.setAppReady();
    if (rootStore.userStore.device === 'phone')
      rootStore.telegramStore.setAppFullScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}