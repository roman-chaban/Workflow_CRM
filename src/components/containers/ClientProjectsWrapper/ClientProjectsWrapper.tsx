'use client';

import { useState } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useAppSelector } from '@/hooks/useAppSelector';

import {
  Grid,
  ProjectsSidebar,
  Box,
  TasksNav,
  FiltersBoard,
} from '@/components/index/index';
import {
  renderContent,
  TasksItem,
} from '@/fixtures/renderContent/renderContent';

import styles from '@/styles/pages/Projects.module.scss';
import { NavigationBar } from '@/components/ui/NavigationBar/NavigationBar';

export const ClientProjectsWrapper = () => {
  useDocumentTitle('Workflow CRM | Projects');
  const activeItemId = useAppSelector((state) => state.navSlice.activeItemId);
  const isOpenBoard = useAppSelector((state) => state.filterSlice.isOpen);
  const [activeTaskItemId, setActiveTaskItemId] =
    useState<TasksItem>('primary');

  return (
    <Grid isSection gap="1.75rem" tag={'section'} position="relative">
      <NavigationBar
        heading="Projects"
        buttonLabel="Add Project"
        isNavButtons={false}
        isOpened={false}
        setIsOpened={() => {}}
        setActiveTab={() => {}}
        tabs={[]}
      />
      <Box className={styles['box']}>
        <ProjectsSidebar />
        <Box className={styles['tasks__box']}>
          <TasksNav
            activeItem={activeTaskItemId}
            onMenuClick={setActiveTaskItemId}
          />
          {renderContent(activeItemId, activeTaskItemId)}
        </Box>
      </Box>
      {isOpenBoard && <FiltersBoard isClosedBoard={!isOpenBoard} />}
    </Grid>
  );
};
