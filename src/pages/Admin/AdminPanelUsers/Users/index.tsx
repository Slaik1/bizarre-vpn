import { FC } from 'react';

import User from '../../../../components/Admin/User';

import { useFetchUsers } from './hooks/useFetchUsers';

import cl from './Users.module.scss';

const Users: FC = () => {
  const { users } = useFetchUsers();

  return (
    <div className={cl.usersContainer}>
      {users.map((el) => (
        <User data={el} key={el.id} />
      ))}
    </div>
  );
};

export default Users;
