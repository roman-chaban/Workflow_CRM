import type { FC } from 'react';

import styles from './TasksActiveNav.module.scss';
import { activeTasks } from '@/constants/activeTasks';

export const TasksActiveNav: FC = () => {
  return (
    <ul className={styles['active__tasks']}>
      {activeTasks.map((task) => (
        <li key={task.id} className={styles['active__tasks-active']}>
          <h4 className={styles['active__tasks-title']}>{task.title}</h4>
        </li>
      ))}
    </ul>
  );
};
