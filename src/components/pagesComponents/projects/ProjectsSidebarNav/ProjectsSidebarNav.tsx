'use client';

import type { FC } from 'react';
import styles from './ProjectsSidebarNav.module.scss';
import { NavItems } from '@/types/projects-nav';
import { ProjectsSidebarNavItem } from '../ProjectsSidebarNavItem/ProjectsSidebarNavItem';
import { useAppSelector } from '@/hooks/useAppSelector';

interface ProjectsSidebarNavProps {
  items: NavItems;
}

export const ProjectsSidebarNav: FC<ProjectsSidebarNavProps> = ({ items }) => {
  const activeItemId = useAppSelector((state) => state.navSlice.activeItemId);
  return (
    <nav className={styles['sidebar__nav']}>
      <ul className={styles['sidebar__nav-menu']}>
        {items.map((item) => {
          const isActive = activeItemId === item.id;
          return (
            <ProjectsSidebarNavItem
              key={item.id}
              item={item}
              isActive={isActive}
            />
          );
        })}
      </ul>
    </nav>
  );
};
