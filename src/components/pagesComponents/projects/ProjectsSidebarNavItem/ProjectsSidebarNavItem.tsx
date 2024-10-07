import type { FC } from 'react';
import styles from './ProjectsSidebarNavItem.module.scss';
import { NavItem } from '@/types/projects-nav';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ui/ArrowIcon/ArrowIcon';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setActiveItem } from '@/store/slices/NavSlice';

interface ProjectsSidebarNavItemProps {
  item: NavItem;
  isActive: boolean;
}

export const ProjectsSidebarNavItem: FC<ProjectsSidebarNavItemProps> = ({
  item,
  isActive,
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setActiveItem(item.id));
  };

  return (
    <li
      onClick={handleClick}
      className={`${styles['nav__item']} ${isActive ? styles['active'] : ''}`}
    >
      <span className={styles['nav__item-code']}>{item.code}</span>

      <span className={styles['nav__item-title']}>{item.title}</span>

      {isActive && (
        <Link href={''} className={styles['nav__item-view-link']}>
          View details <ArrowIcon />
        </Link>
      )}
    </li>
  );
};
