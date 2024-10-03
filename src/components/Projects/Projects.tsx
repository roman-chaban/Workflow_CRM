import type { FC } from 'react';
import styles from './Projects.module.scss';
import { ProjectsNav } from './ProjectsNav/ProjectsNav';
import { ProjectsItems } from './ProjectsItems/ProjectsItems';

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
