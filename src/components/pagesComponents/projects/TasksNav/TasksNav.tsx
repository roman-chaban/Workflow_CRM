import type { FC } from 'react';

import styles from './TasksNav.module.scss';
import { Button } from '@/components/index';
import Image from 'next/image';

export const TasksNav: FC = () => {
  return (
    <div className={styles['tasks__nav']}>
      <div className={styles['tasks__nav-container']}>
        <h4 className={styles['tasks__nav-title']}>Tasks</h4>
        <div className={styles['tasks__nav-menu']}>
          <Button type="button" className={styles['menu__button']}>
            <Image
              alt="Item Icon"
              src="/icons/projects/unselected-primary.svg"
              width={24}
              height={24}
            />
          </Button>
          <Button type="button" className={styles['menu__button']}>
            <Image
              alt="Item Icon"
              src="/icons/projects/unselected-secondary.svg"
              width={24}
              height={24}
            />
          </Button>
          <Button type="button" className={styles['menu__button']}>
            <Image
              alt="Item Icon"
              src="/icons/projects/unselected-tertiary.svg"
              width={24}
              height={24}
            />
          </Button>
        </div>
        <Button type="button" className={styles['notifications__button']}>
          {' '}
          <Image
            alt="Item Icon"
            src="/icons/projects/notifications.svg"
            width={24}
            height={24}
          />
        </Button>
      </div>
      <h5 className={styles['active__tasks']}>Active Tasks</h5>
    </div>
  );
};
