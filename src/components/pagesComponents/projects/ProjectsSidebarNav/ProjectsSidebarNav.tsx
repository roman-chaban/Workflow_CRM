import type { FC } from 'react';

import styles from './ProjectsSidebarNav.module.scss';
import { NavItems } from '@/types/projects-nav';
import { ProjectsSidebarNavItem } from '../ProjectsSidebarNavItem/ProjectsSidebarNavItem';

interface ProjectsSidebarNavProps {
  items: NavItems;
}

export const ProjectsSidebarNav: FC<ProjectsSidebarNavProps> = ({ items }) => {
  return (
    <nav className={styles['sidebar__nav']}>
      <ul className={styles['sidebar__nav-menu']}>
        {items.map((item) => (
          <ProjectsSidebarNavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};
