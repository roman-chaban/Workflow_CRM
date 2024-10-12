import type { FC } from 'react';

import styles from './ActiveTask.module.scss';
import { IActiveTask } from '@/types/active-task';
import Image from 'next/image';

interface ActiveTaskProps {
  task: IActiveTask;
  backlogClassName: string;
}

export const ActiveTask: FC<ActiveTaskProps> = ({ task, backlogClassName }) => {
  return (
    <div className={`${styles.active__task} ${backlogClassName}`}>
      <div className={styles['active__task-header']}>
        <h5 className={styles['active__task-code']}>{task.code}</h5>
        <h4 className={styles['active__task-title']}>{task.title}</h4>
      </div>
      <div className={styles['active__task-main']}>
        <div className={styles['active__task-block']}>
          <span className={styles['active__task-duration']}>
            {task.duration}
          </span>
          <Image
            src={
              task.isUp
                ? '/icons/projects/low.svg'
                : '/icons/projects/medium.svg'
            }
            alt={task.isUp ? 'Arrow Down' : 'Arrow Up'}
            width={24}
            height={24}
          />
        </div>
        <Image
          src={task.profileIcon}
          alt={'Task Profile Icon'}
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
