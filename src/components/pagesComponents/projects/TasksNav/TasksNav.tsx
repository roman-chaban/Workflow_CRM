'use client';

import { FC } from 'react';
import styles from './TasksNav.module.scss';
import { Button } from '@/components/index';
import Image from 'next/image';
import { Heading } from '@/components/ui/Heading/Heading';
import { MenuButton } from './MenuButton/MenuButton';
import { menuItems } from '@/constants/menuItems';
import { TasksActiveNav } from '../../TasksActiveNav/TasksActiveNav';

interface TasksNavProps {
  activeItem: string;
  onMenuClick: (item: string) => void;
}

export const TasksNav: FC<TasksNavProps> = ({ activeItem, onMenuClick }) => {
  return (
    <div className={styles['tasks__nav']}>
      <div className={styles['tasks__nav-container']}>
        <h4 className={styles['tasks__nav-title']}>Tasks</h4>
        <div className={styles['tasks__nav-menu']}>
          {menuItems.map((item) => (
            <MenuButton
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              onClick={() => onMenuClick(item.id)}
            />
          ))}
        </div>
        <Button type="button" className={styles['notifications__button']}>
          <Image
            alt="Notifications Icon"
            src="/icons/projects/notifications.svg"
            width={24}
            height={24}
          />
        </Button>
      </div>
      {activeItem === 'secondary' && <TasksActiveNav />}
      <Heading className={styles['active__tasks']} level={'h4'}>
        Active Tasks
      </Heading>
    </div>
  );
};
