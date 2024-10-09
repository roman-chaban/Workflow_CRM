'use client';

import { ProjectsNav } from '@/components/pagesComponents/projects/ProjectsNav/ProjectsNav';
import { useState } from 'react';
import {
  Grid,
  ProjectsSidebar,
  Box,
  TasksNav,
  Tasks,
  FoodDelivery,
  Fortune,
  PlannerApp,
  TimeTracker,
  Internal,
} from '@/components/index/index';

import styles from '@/styles/pages/Projects.module.scss';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ActiveTasks } from '@/components/pagesComponents/projects/ActiveTasks/ActiveTasks';

export default function Projects() {
  useDocumentTitle('Workflow CRM | Projects');
  const activeItemId = useAppSelector((state) => state.navSlice.activeItemId);
  const [activeTaskItemId, setActiveTaskItemId] = useState<string>('primary');

  const changeAnotherTasksItem =
    activeTaskItemId === 'primary' ? (
      <Tasks />
    ) : activeTaskItemId === 'secondary' ? (
      <ActiveTasks />
    ) : (
      'Tertiary'
    );

  const renderContent = () => {
    switch (activeItemId) {
      case 1:
        return changeAnotherTasksItem;
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
        return '';
    }
  };

  return (
    <Grid isSection gap="1.75rem">
      <ProjectsNav />
      <Box className={styles['box']}>
        <ProjectsSidebar />
        <Box className={styles['tasks__box']}>
          <TasksNav
            activeItem={activeTaskItemId}
            onMenuClick={setActiveTaskItemId}
          />
          {renderContent()}
        </Box>
      </Box>
    </Grid>
  );
}
