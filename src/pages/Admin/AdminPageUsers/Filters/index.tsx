import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FC } from 'react';
import { IoFilterOutline } from 'react-icons/io5';

import FiltersContent from './FiltersContent';

import cl from './Filters.module.scss';

const Filters: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={cl.filters}>
      <IoFilterOutline size={20} className={cl.filtersIcon} onClick={open} />
      <Drawer
        opened={opened}
        onClose={close}
        position="bottom"
        title="Фильтры пользователей"
      >
        <FiltersContent />
      </Drawer>
    </div>
  );
};

export default Filters;
