import type { FC } from 'react';

import styles from './CalendarNav.module.scss';
import { Button } from '../index';
import { Plus } from '../icons/Plus/Plus';

export const CalendarNav: FC = () => {
  return (
    <nav className={styles['calendarNav']}>
      <h1 className={styles['calendarNavTitle']}>Calendar</h1>
      <Button type="button" className={styles['calendarNavButton']}>
        <Plus color="white" />
        Add Event
      </Button>
    </nav>
  );
};
