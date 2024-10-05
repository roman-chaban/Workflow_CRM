import type { FC } from 'react';

import styles from './ProjectsSidebarNavItem.module.scss';
import { NavItem } from '@/types/projects-nav';

interface ProjectsSidebarNavItemProps {
  item: NavItem;
}

export const ProjectsSidebarNavItem: FC<ProjectsSidebarNavItemProps> = ({
  item,
}) => {
  return (
    <li className={styles['nav__item']}>
      <span className={styles['nav__item-code']}>{item.code}</span>
      {item.title}
    </li>
  );
};
