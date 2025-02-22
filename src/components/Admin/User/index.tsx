import { Badge } from '@mantine/core';
import { FC } from 'react';

import { User as UserType } from '../../../ts/types/user';

import cl from './User.module.scss';

interface UserProps {
  data: UserType;
  showControlPanel: () => void;
  setCurrentUser: SetState<N<UserType>>;
}

const User: FC<UserProps> = ({ data, showControlPanel, setCurrentUser }) => {
  const { username, id, role } = data;

  const clickUserHandler = () => {
    showControlPanel();
    setCurrentUser(data);
  };

  return (
    <div className={cl.user} onClick={clickUserHandler}>
      <p className={cl.id}>{id}</p>
      <p className={cl.username}>{username}</p>
      {role === 'admin' && <Badge color="var(--primary-color)">{role}</Badge>}
    </div>
  );
};

export default User;
