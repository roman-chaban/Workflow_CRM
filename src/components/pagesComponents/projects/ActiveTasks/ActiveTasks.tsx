import { FC, useEffect, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ActiveTask } from '../ActiveTask/ActiveTask';
import styles from './ActiveTasks.module.scss';
import { IActiveTask, TActiveTasks } from '@/types/active-task';
import { TasksLoader } from '@/components/index';
import { useFetch } from '@/hooks/useFetch';

interface SortableItemProps {
  task: IActiveTask;
}

const SortableItem: FC<SortableItemProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.taskId.toString() });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: '100%',
    maxWidth: '192px',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ActiveTask task={task} backlogClassName="" />
    </div>
  );
};

export const ActiveTasks: FC = () => {
  const { data: tasks, loading } = useFetch<TActiveTasks>({
    url: '/data/active-tasks.json',
  });

  const [taskList, setTaskList] = useState<IActiveTask[]>([]);

  useEffect(() => {
    if (tasks) {
      setTaskList(tasks);
    }
  }, [tasks]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (loading) {
    return <TasksLoader />;
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setTaskList((items) => {
        const oldIndex = items.findIndex(
          (item) => item.taskId.toString() === active.id
        );
        const newIndex = items.findIndex(
          (item) => item.taskId.toString() === over?.id
        );

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={taskList.map((task) => task.taskId.toString())}
        strategy={verticalListSortingStrategy}
      >
        <div className={styles['active__tasks']}>
          {taskList.map((task) => (
            <SortableItem key={task.taskId.toString()} task={task} />
          ))}
        </div>
      </SortableContext>
      <div className={styles['backlog__tasks']}>
        <h5 className={styles['backlog__heading']}>Backlog</h5>
        <div className={styles['backlog__items']}>
          {taskList.slice(0, 3).map((task: IActiveTask) => (
            <ActiveTask
              key={task.taskId.toString()}
              task={task}
              backlogClassName={styles['backlog__task']}
            />
          ))}
        </div>
      </div>
    </DndContext>
  );
};
