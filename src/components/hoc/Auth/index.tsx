import { FC, ReactNode } from 'react';

import { useAuth } from './hooks/useAuth';

interface AuthProps {
  children: ReactNode;
}

const Auth: FC<AuthProps> = ({ children }) => {
  const { isLoading } = useAuth();

  if (isLoading) return null;

  // if (!isUserExist) return <h1>Ошибка авторизации пользователя</h1>;

  return children;
};

export default Auth;
