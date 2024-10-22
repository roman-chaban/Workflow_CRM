import type { FC } from 'react';

import styles from './EmployeesNav.module.scss';
import { Button } from '@/components/ui/Button/Button';

export const EmployeesNav: FC = () => {
  return (
    <div className={styles['employees__nav']}>
      <h3 className={styles['employees__nav-title']}>Employees</h3>
      <div>
        <Button type={'button'}>List</Button>
        <Button type={'button'}>Activity</Button>
      </div>
    </div>
  );
};
