import { Input, Select } from '@mantine/core';
import { FC } from 'react';

import { UserRoles } from '../../../../../constants/user';

import cl from './FiltersContent.module.scss';

const FiltersContent: FC = () => {
  return (
    <>
      <Input mb={16} className={cl.searchInput} placeholder="Введите имя или id" />
      <Select
        placeholder="Роль"
        data={UserRoles}
        clearable
        className={cl.roleSelect}
      />
    </>
  );
};

export default FiltersContent;
