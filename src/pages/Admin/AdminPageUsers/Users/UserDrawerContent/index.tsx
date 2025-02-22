import { Select } from '@mantine/core';
import { FC, useState } from 'react';

import { User } from '../../../../../ts/types/user';

import cl from './UserDrawerContent.module.scss';
import { UserRoles } from '../../../../../constants/user';

interface UserDrawerContentProps {
  user: N<User>;
}

const UserDrawerContent: FC<UserDrawerContentProps> = ({ user }) => {
  const [role, setRole] = useState(user?.role);
  const [plan, setPlan] = useState(user?.role);

  if (!user) return;

  return (
    <div>
      <Select onChange={setRole} label="Роль" value={role} data={UserRoles} />
      <Select
        onChange={(e) => console.log('e', e)}
        label="Тарифный план"
        value={plan}
        data={['basic', 'stand']}
      />
    </div>
  );
};

export default UserDrawerContent;
