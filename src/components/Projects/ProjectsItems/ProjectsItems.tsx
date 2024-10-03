'use client';

import { useFetch } from '@/hooks/useFetch';
import type { FC } from 'react';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { ProjectItems } from '@/types/project-item';

import styles from '../Projects.module.scss';

export const ProjectsItems: FC = () => {
  const { data } = useFetch<ProjectItems>({ url: '/data/projects-items.json' });

  return (
    <div className={styles['projects__items']}>
      {data?.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </div>
  );
};
