import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FC, useState } from 'react';

import User from '../../../../components/Admin/User';
import { User as UserType } from '../../../../ts/types/user';

import { useFetchUsers } from './hooks/useFetchUsers';
import UserDrawerContent from './UserDrawerContent';

import cl from './Users.module.scss';

const Users: FC = () => {
  const { users } = useFetchUsers();
  const [opened, { open, close }] = useDisclosure(false);
  const [currentUser, setCurrentUser] = useState<N<UserType>>(null);

  return (
    <div className={cl.usersContainer}>
      {users.map((el) => (
        <User
          data={el}
          setCurrentUser={setCurrentUser}
          showControlPanel={open}
          key={el.id}
        />
      ))}
      <Drawer
        size={'lg'}
        position="bottom"
        opened={opened}
        onClose={close}
        title={'Пользователь ' + currentUser?.username}
      >
        <UserDrawerContent user={currentUser} />
      </Drawer>
    </div>
  );
};

export default Users;
