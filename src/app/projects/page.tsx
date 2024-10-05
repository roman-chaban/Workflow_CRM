import type { Metadata } from 'next';

import { ProjectsNav } from '@/components/pagesComponents/projects/ProjectsNav/ProjectsNav';
import {
  Grid,
  ProjectsSidebar,
  Box,
  TasksNav,
  Tasks,
} from '@/components/index/index';

import styles from '@/styles/pages/Projects.module.scss';

export const metadata: Metadata = {
  title: 'Workflow CRM | Projects',
  icons: '/favicon/crm_logo.svg',
};

export default function Projects() {
  return (
    <Grid isSection gap="1.75rem">
      <ProjectsNav />
      <Box className={styles['box']}>
        <ProjectsSidebar />
        <Box className={styles['tasks__box']}>
          <TasksNav />
          <Tasks />
        </Box>
      </Box>
    </Grid>
  );
}
