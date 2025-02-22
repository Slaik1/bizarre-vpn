import { observer } from 'mobx-react-lite';
import { FC, ReactNode } from 'react';

import { rootStore } from '../../../stores/RootStore';

interface AdminGuardProps {
  children: ReactNode;
}

const AdminGuard: FC<AdminGuardProps> = ({ children }) => {
  if (rootStore.userStore.user?.role === 'admin') return children;

  return null;
};

export default observer(AdminGuard);
