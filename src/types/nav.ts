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
    href: '/dashboard',
    children: 'Dashboard',
  },
  {
    id: 2,
    icon: '/icons/dashboardIcons/inactive.svg',
    href: '/projects',
    children: 'Projects',
  },
  {
    id: 3,
    icon: '/icons/dashboardIcons/calendar.svg',
    href: '/calendar',
    children: 'Calendar',
  },
  {
    id: 4,
    icon: '/icons/dashboardIcons/fly.svg',
    href: '/vacations',
    children: 'Vacations',
  },
  {
    id: 5,
    icon: '/icons/dashboardIcons/users.svg',
    href: '/employees',
    children: 'Employees',
  },
  {
    id: 6,
    icon: '/icons/dashboardIcons/chat.svg',
    href: '/messenger',
    children: 'Messenger',
  },
  {
    id: 7,
    icon: '/icons/dashboardIcons/folder.svg',
    href: '/info',
    children: 'Info Portal',
  },
];
