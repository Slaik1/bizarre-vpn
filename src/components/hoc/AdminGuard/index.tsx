import { observer } from 'mobx-react-lite';
import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { Pages } from '../../../constants/pages';
import { rootStore } from '../../../stores/RootStore';

interface AdminGuardProps {
  children: ReactNode;
}

const AdminGuard: FC<AdminGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  if (rootStore.userStore.user?.role === 'basic') return children;

  navigate(Pages.Home);

  return null;
};

export default observer(AdminGuard);
