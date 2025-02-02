import { Badge } from '@mantine/core';
import { FC } from 'react';

import { User as UserType } from '../../../ts/types/user';

import cl from './User.module.scss';

interface UserProps {
  data: UserType;
}

const User: FC<UserProps> = ({ data }) => {
  const { username, id, role } = data;

  return (
    <div className={cl.user}>
      <p className={cl.id}>{id}</p>
      <p className={cl.username}>{username}</p>
      {role === 'admin' && <Badge color="var(--primary-color)">{role}</Badge>}
    </div>
  );
};

export default User;
