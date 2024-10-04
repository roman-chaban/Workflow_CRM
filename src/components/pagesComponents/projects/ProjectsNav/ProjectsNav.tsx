import type { FC } from 'react';

import styles from './ProjectsNav.module.scss';
import { Button } from '@/components/index';
import Image from 'next/image';

export const ProjectsNav: FC = () => {
  return (
    <div className={styles['projects__nav']}>
      <h1 className={styles['projects__nav-title']}>Projects</h1>
      <Button type="button" className={styles['projects__nav-button']}>
        <Image
          src="/icons/nearest/plus.svg"
          alt="Plus Icon"
          width={24}
          height={24}
        />
        Add Project
      </Button>
    </div>
  );
};
