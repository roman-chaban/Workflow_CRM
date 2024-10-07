'use client';

import { ProjectsNav } from '@/components/pagesComponents/projects/ProjectsNav/ProjectsNav';
import {
  Grid,
  ProjectsSidebar,
  Box,
  TasksNav,
  Tasks,
} from '@/components/index/index';

import styles from '@/styles/pages/Projects.module.scss';
import { useAppSelector } from '@/hooks/useAppSelector';
import { FoodDelivery } from '@/components/pagesComponents/projects/FoodDelivery/FoodDelivery';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Fortune } from '@/components/pagesComponents/projects/Fortune/Fortune';
import { PlannerApp } from '@/components/pagesComponents/projects/PlannerApp/PlannerApp';
import { TimeTracker } from '@/components/pagesComponents/projects/TimeTracker/TimeTracker';
import { Internal } from '@/components/pagesComponents/projects/Internal/Internal';
import { useState } from 'react';

export default function Projects() {
  useDocumentTitle('Workflow CRM | Projects');
  const activeItemId = useAppSelector((state) => state.navSlice.activeItemId);
  const [activeTaskItemId, setActiveTaskItemId] = useState<string>('primary');

  const changeAnotherTasksItem =
    activeTaskItemId === 'primary' ? (
      <Tasks />
    ) : activeTaskItemId === 'secondary' ? (
      'Secondary'
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
