import { Input, Select } from '@mantine/core';
import { FC } from 'react';

import cl from './FiltersContent.module.scss';

const FiltersContent: FC = () => {
  return (
    <>
      <Input
        className={cl.searchInput}
        placeholder="Введите имя пользователя или id"
      />
      <div className={cl.scrollFilersContainer}>
        <Select
          placeholder="Роль"
          data={['admin', 'basic']}
          clearable
          className={cl.roleSelect}
        />
      </div>
    </>
  );
};

export default FiltersContent;
