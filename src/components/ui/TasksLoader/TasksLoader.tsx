import type { FC } from 'react';

import styles from './TaskLoader.module.scss';

export const TasksLoader: FC = () => {
  return (
    <div className={styles['loader__container']}>
      <div className={styles['tasks-loader']}>
        <div className={styles['spinner']}></div>
      </div>
    </div>
  );
};
