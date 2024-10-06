import { Task } from '@/types/tasks';
import styles from '@/components/pagesComponents/projects/Tasks/TaskItem/TaskItem.module.scss';

export const generateTaskProgressClassNames = (task: Task) => {
  switch (task.isDone) {
    case 'Done':
      return styles['task__done'];
    case 'In Progress':
      return styles['task__progress'];
    case 'To Do':
      return styles['task__todo'];
    case 'In Review':
      return styles['task__review'];
  }
};
