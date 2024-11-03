import { PATHS } from '@/enums/paths';

export interface NavItem {
  id: number;
  icon: string;
  activeIcon: string;
  href: string;
  children: string;
}

export type NavItems = Array<NavItem>;

export const nav: NavItems = [
  {
    id: 1,
    icon: '/icons/dashboardIcons/active.svg',
    activeIcon: 'icons/activeIcons/primary.svg',
    href: PATHS.HOME,
    children: 'Dashboard',
  },
  {
    id: 2,
    icon: '/icons/dashboardIcons/inactive.svg',
    activeIcon: 'icons/activeIcons/secondary.svg',
    href: PATHS.PROJECTS,
    children: 'Projects',
  },
  {
    id: 3,
    icon: '/icons/dashboardIcons/calendar.svg',
    href: PATHS.CALENDAR,
    activeIcon: 'icons/activeIcons/tertiary.svg',
    children: 'Calendar',
  },
  {
    id: 4,
    icon: '/icons/dashboardIcons/fly.svg',
    href: PATHS.VACATIONS,
    activeIcon: 'icons/activeIcons/four.svg',
    children: 'Vacations',
  },
  {
    id: 5,
    icon: '/icons/dashboardIcons/users.svg',
    href: PATHS.EMPLOYEES,
    activeIcon: 'icons/activeIcons/five.svg',
    children: 'Employees',
  },
  {
    id: 6,
    icon: '/icons/dashboardIcons/chat.svg',
    href: PATHS.MESSENGER,
    activeIcon: 'icons/activeIcons/six.svg',
    children: 'Messenger',
  },
  {
    id: 7,
    icon: '/icons/dashboardIcons/folder.svg',
    href: PATHS.INFO_PORTAL,
    activeIcon: 'icons/activeIcons/seven.svg',
    children: 'Info Portal',
  },
];
