import { notifications } from '@mantine/notifications';
import { observer } from 'mobx-react-lite';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import api from '../../api';
import tryCatchWrapper from '../../helpers/tryCatchWrapper';
import { useTelegram } from '../../hooks/useTelegram';
import layoutStore from '../../stores/LayoutStore';
import Navigation from '../Navigation';

import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef(null);
  const [isAppReady, setIsAppReady] = useState(false);
  const { user, tg } = useTelegram();

  const checkAuth = () => {
    console.log('user', user);


    // if (!user) return;

    const params = {
      isBot: user?.is_bot || false,
      languageCode: tg.initDataUnsafe?.query?.language_code || 'en',
      telegramId: user?.id,
      username: user?.username,
    };


    tryCatchWrapper(
      async () => {
        // const data = await api.user.auth(params);
        const data = await api.user.ping()
        
        setIsAppReady(true)
      },
      {
        errorHandler: () => notifications.show({
            title: 'Ошибка',
            //@ts-ignore
            message: e.response?.data?.message || `Что-то пошло не так`,
            color: 'red',
          }),
      }
    )();
  };

  useEffect(() => {
    checkAuth()
    layoutStore.setMainRef(mainRef);
  }, [user]);

  if (isAppReady)
    return (
      <>
        <main ref={mainRef} className={styles.section}>
          {children}
        </main>
        <Navigation />
      </>
    );

  return (<h1>bad 200</h1>)
};

export default observer(Layout);
