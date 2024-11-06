import type { FC } from 'react';

import Image from 'next/image';

import { IActiveTask } from '@/types/active-task';

import { DragType } from '@/types/drag-types';

import styles from './ActiveTask.module.scss';

interface ActiveTaskProps extends DragType {
  task: IActiveTask;
  isDragging: boolean;
}

export const ActiveTask: FC<ActiveTaskProps> = ({
  task,
  isDragging,
  onDragOver,
  onDragStart,
  onDrop,
}) => {
  return (
    <div
      className={`${styles['active__task']} ${
        isDragging ? styles.dragging : ''
      }`}
      draggable={true}
      onDragStart={(event) => onDragStart(event, task.taskId)}
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, task.taskId)}
    >
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
