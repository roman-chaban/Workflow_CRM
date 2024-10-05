import type { FC } from 'react';
import Image from 'next/image';
import styles from './TaskItem.module.scss';
import { Task } from '@/types/tasks';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const { taskName, estimate, spentTime, assignee, priority } = task;

  const getPriorityIcon = (priority: string) => {
    const iconPath =
      priority === 'Medium'
        ? '/icons/projects/medium.svg'
        : '/icons/projects/low.svg';
    const altText = `${priority} Priority Icon`;

    return <Image src={iconPath} alt={altText} width={24} height={24} />;
  };

  const getPriorityColor = (priority: string) => {
    return priority === 'Medium' ? '#FFBD21' : '#0AC947';
  };

  return (
    <div className={styles.task__item}>
      <div className={styles.task__itemContainer}>
        <h4 className={styles.task__title}>
          Task Name: <strong>{taskName}</strong>
        </h4>

        <div className={styles.tasks__list}>
          <h4 className={styles.task__title}>
            Estimate: <strong>{estimate}</strong>
          </h4>

          <h4 className={styles.task__title}>
            Spent Time: <strong>{spentTime}</strong>
          </h4>

          <h4 className={styles.task__title}>
            Assignee:
            <Image
              src={assignee}
              alt={`Assignee for ${taskName}`}
              width={24}
              height={24}
            />
          </h4>

          <h4 className={styles.task__title}>
            Priority:
            <strong
              id={styles.task__priority}
              style={{ color: getPriorityColor(priority) }}
            >
              {getPriorityIcon(priority)} {priority}
            </strong>
          </h4>
        </div>
      </div>
    </div>
  );
};
