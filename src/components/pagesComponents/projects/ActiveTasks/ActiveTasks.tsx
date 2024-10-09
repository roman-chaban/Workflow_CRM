import type { FC } from 'react';

import { TasksLoader } from '@/components/index';
import { ActiveTask } from '../ActiveTask/ActiveTask';

import { useFetch } from '@/hooks/useFetch';

import styles from './ActiveTasks.module.scss';
import { IActiveTask, TActiveTasks } from '@/types/active-task';

export const ActiveTasks: FC = () => {
  const { data: tasks, loading } = useFetch<TActiveTasks>({
    url: '/data/active-tasks.json',
  });

  if (loading) {
    return <TasksLoader />;
  }

  return (
    <div className={styles['active']}>
      <div className={styles['active__tasks']}>
        {tasks?.map((task) => (
          <ActiveTask key={task.taskId} task={task} />
        ))}
      </div>
      <div className={styles['backlog__tasks']}>
        <h5 className={styles['backlog__heading']}>Backlog</h5>
        <div className={styles['backlog__items']}>
          {tasks!.slice(0, 4).map((task: IActiveTask) => (
            <ActiveTask key={task.taskId} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};
