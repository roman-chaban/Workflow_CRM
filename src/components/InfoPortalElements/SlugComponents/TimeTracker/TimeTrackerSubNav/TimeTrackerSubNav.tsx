import type { FC } from 'react';

import { Button } from '@/components/index';

import { EditButton } from '@/components/ui/buttons/EditButton/EditButton';

import styles from './TimeTrackerSubNav.module.scss';

export const TimeTrackerSubNav: FC = () => {
  return (
    <div className={styles['subNav']}>
      <h4 className={styles['subNavTitle']}>Technical task</h4>
      <div className={styles['subNavButtons']}>
        <EditButton className={styles['subNavEditButton']} />
        <Button type="button" className={styles['subNavShareButton']}>
          Share
        </Button>
      </div>
    </div>
  );
};
