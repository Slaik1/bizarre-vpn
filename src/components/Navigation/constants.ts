import { HiOutlineHome } from 'react-icons/hi2';
import { IoMdHelp } from 'react-icons/io';
import { RiAdminLine } from 'react-icons/ri';
import { TbShoppingBag } from 'react-icons/tb';

import { Pages } from '../../constants/pages';

export const SYSTEM_NAV_LINKS = [
  {
    route: Pages.Home,
    icon: HiOutlineHome,
    titleKey: 'navigation.home',
  },
  {
    route: Pages.Store,
    icon: TbShoppingBag,
    titleKey: 'navigation.store',
  },
  {
    route: Pages.Help,
    icon: IoMdHelp,
    titleKey: 'navigation.help',
  },
];

export const ADMIN_NAV_LINKS = [
  {
    route: Pages.AdminLinks,
    icon: RiAdminLine,
    titleKey: 'navigation.adminLinks',
  },
];
