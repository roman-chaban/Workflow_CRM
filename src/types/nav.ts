import { PATHS } from '@/constants/paths';

export interface NavItem {
  id: number;
  icon: string;
  href: string;
  children: string;
}

export type NavItems = Array<NavItem>;

export const nav: NavItems = [
  {
    id: 1,
    icon: '/icons/dashboardIcons/active.svg',
    href: PATHS.HOME,
    children: 'Dashboard',
  },
  {
    id: 2,
    icon: '/icons/dashboardIcons/inactive.svg',
    href: PATHS.PROJECTS,
    children: 'Projects',
  },
  {
    id: 3,
    icon: '/icons/dashboardIcons/calendar.svg',
    href: PATHS.CALENDAR,
    children: 'Calendar',
  },
  {
    id: 4,
    icon: '/icons/dashboardIcons/fly.svg',
    href: PATHS.VACATIONS,
    children: 'Vacations',
  },
  {
    id: 5,
    icon: '/icons/dashboardIcons/users.svg',
    href: PATHS.EMPLOYEES,
    children: 'Employees',
  },
  {
    id: 6,
    icon: '/icons/dashboardIcons/chat.svg',
    href: PATHS.MESSENGER,
    children: 'Messenger',
  },
  {
    id: 7,
    icon: '/icons/dashboardIcons/folder.svg',
    href: PATHS.INFO_PORTAL,
    children: 'Info Portal',
  },
];
