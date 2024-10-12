import React from 'react';
import {
  FoodDelivery,
  Fortune,
  Internal,
  PlannerApp,
  Tasks,
  TimeTracker,
} from '@/components/index';
import { ActiveTasks } from '@/components/pagesComponents/projects/ActiveTasks/ActiveTasks';
import { ActiveTasksTable } from '@/components/pagesComponents/projects/ActiveTasksTable/ActiveTasksTable';

export type TasksItem = 'primary' | 'secondary';

export const changeAnotherTasksItem = (activeTaskItemId: TasksItem) => {
  switch (activeTaskItemId) {
    case 'primary':
      return <Tasks />;
    case 'secondary':
      return <ActiveTasks />;
    default:
      return <ActiveTasksTable />;
  }
};

export const renderContent = (
  activeItemId: number | null,
  activeTaskItemId: TasksItem
) => {
  if (activeItemId === null) {
    return '';
  }

  switch (activeItemId) {
    case 1:
      return changeAnotherTasksItem(activeTaskItemId);
    case 2:
      return <FoodDelivery />;
    case 3:
      return <Fortune />;
    case 4:
      return <PlannerApp />;
    case 5:
      return <TimeTracker />;
    case 6:
      return <Internal />;
    default:
      return <div>No content available</div>;
  }
};
