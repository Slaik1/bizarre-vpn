import { Pagination } from '@mantine/core';
import { FC } from 'react';

import cl from './UsersPagination.module.scss'

const UsersPagination: FC = () => {
  return (
    <>
      <Pagination total={20} className={cl.usersPagination}/>
    </>
  );
};

export default UsersPagination;
