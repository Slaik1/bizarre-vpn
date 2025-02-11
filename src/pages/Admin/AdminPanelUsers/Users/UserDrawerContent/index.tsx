import { FC } from 'react';

import { User } from '../../../../../ts/types/user';

import cl from './UserDrawerContent.module.scss';
import { Select } from '@mantine/core';

interface UserDrawerContentProps {
  user: N<User>;
}

const UserDrawerContent: FC<UserDrawerContentProps> = ({ user }) => {
  if (!user) return;

  const { createdAt, id, role, updatedAt, username } = user;

  return (<div>
		<Select placeholder='asd' value={role}/>
	</div>);
};

export default UserDrawerContent;
