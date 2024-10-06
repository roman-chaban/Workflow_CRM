'use client';

import { type FC } from 'react';

import styles from './Tasks.module.scss';
import { useFetch } from '@/hooks/useFetch';
import { TTasks } from '@/types/tasks';
import { TaskItem } from './TaskItem/TaskItem';
import { Heading } from '@/components/ui/Heading/Heading';
import { TasksLoader } from '@/components/ui/TasksLoader/TasksLoader';

export const Tasks: FC = () => {
  const { data: tasks, loading } = useFetch<TTasks>({
    url: '/data/tasks.json',
  });

  if (loading) {
    return <TasksLoader />;
  }

  return (
    <>
      <ul className={styles['tasks']}>
        {tasks &&
          tasks.map((task) => <TaskItem key={task.taskId} task={task} />)}
      </ul>
      <Heading className={styles['backlog__tasks']} level={'h4'}>
        Backlog
      </Heading>
    </>
  );
};
