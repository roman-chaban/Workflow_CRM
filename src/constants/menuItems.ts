export interface MenuItem {
  id: string;
  icon: string;
  activeIcon: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'primary',
    icon: '/icons/projects/unselected-primary.svg',
    activeIcon: '/icons/activeTasksIcons/primary-active.svg',
  },
  {
    id: 'secondary',
    icon: '/icons/projects/unselected-secondary.svg',
    activeIcon: '/icons/activeTasksIcons/secondary-active.svg',
  },
  {
    id: 'tertiary',
    icon: '/icons/projects/unselected-tertiary.svg',
    activeIcon: '/icons/activeTasksIcons/tertiary-active.svg',
  },
];
