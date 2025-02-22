import { Input, Select } from '@mantine/core';
import { FC } from 'react';

import { UserRoles } from '../../../../../constants/user';

const FiltersContent: FC = () => {
  return (
    <>
      <Input mb={16} placeholder="Введите имя или id" />
      <Select placeholder="Роль" data={UserRoles} clearable />
    </>
  );
};

export default FiltersContent;
