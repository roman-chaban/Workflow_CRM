import type { FC } from 'react';
import styles from './Projects.module.scss';

import { ProjectsNav, ProjectsItems } from '@/components/index/index';

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
