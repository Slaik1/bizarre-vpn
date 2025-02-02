import { Input, Select } from '@mantine/core';
import { FC } from 'react';

import cl from './Filters.module.scss';

const Filters: FC = () => {
  return (
    <div className={cl.filters}>
      <Input className={cl.searchInput} placeholder="Введите имя пользователя или id" />
      <div className={cl.scrollFilersContainer}>
        <Select
          placeholder="Роль"
          data={['admin', 'basic']}
          clearable
					className={cl.roleSelect}
        />
      </div>
    </div>
  );
};

export default Filters;
