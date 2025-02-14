import { observer } from 'mobx-react-lite';
import { FC, ReactNode } from 'react';

import { rootStore } from '../../../stores/RootStore';
import Preloader from '../../Preloader';

import { useAuth } from './hooks/useAuth';

interface AuthProps {
  children: ReactNode;
}

const Auth: FC<AuthProps> = ({ children }) => {
  const { isLoading } = useAuth();

  if (isLoading) return <Preloader />;

  if (rootStore.userStore.isAuth) return children;

  return null;
};

export default observer(Auth);
