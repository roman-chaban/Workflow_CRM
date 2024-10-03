import type { FC } from 'react';

import styles from './ProjectsNav.module.scss';
import { ViewLink } from '@/components/ui/ViewLink/ViewLink';

export const ProjectsNav: FC = () => {
  return (
    <div className={styles['projects__nav']}>
      <ViewLink>Projects</ViewLink>
    </div>
  );
};
