import { HiOutlineHome } from 'react-icons/hi2';
import { IoMdHelp } from 'react-icons/io';
import { RiAdminLine } from "react-icons/ri";
import { TbShoppingBag } from 'react-icons/tb';
export const getNavLinks = () => {
  return [
    {
      route: '/',
      icon: HiOutlineHome,
      title: 'Главная',
    },
    {
      route: '/store',
      icon: TbShoppingBag,
      title: 'Магазин',
    },
    {
      route: '/help',
      icon: IoMdHelp,
      title: 'Помощь',
    },
    {
      route: '/admin',
      icon: RiAdminLine,
      title: 'Управление',
    },
  ];
};
