import type { FC } from 'react';

import { ProjectsNav, ProjectsItems } from '@/components/index/index';

import styles from './Projects.module.scss';

export const Projects: FC = () => {
  return (
    <div className={styles['projects']}>
      <div className={styles['projects__container']}>
        <ProjectsNav />
        <ProjectsItems />
      </div>
    </div>
  );
};
