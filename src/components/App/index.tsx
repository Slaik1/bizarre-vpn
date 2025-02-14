import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { rootStore } from '../../stores/RootStore';
import RoutesComponent from '../hoc/RoutesComponent';
import ThemeProvider from '../ThemeProvider';

const App: FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(rootStore.telegramStore.getUserLanguage());
    rootStore.telegramStore.setAppReady();
    if (rootStore.userStore.device === 'phone')
      rootStore.telegramStore.setAppFullScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  );
};

export default observer(App);
