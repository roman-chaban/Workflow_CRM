import type { FC } from 'react';

import styles from './ActiveSidebar.module.scss';
import { ActiveNav } from './ActiveNav/ActiveNav';
import { Select } from '@/components/index';

const options = [
  { value: 'current', label: 'Current Projects' },
  { value: 'past', label: 'Past Projects' },
  { value: 'future', label: 'Future Projects' },
];

export const ActiveSidebar: FC = () => {
  const classNames = {
    select: styles['active__sidebar-select'],
    selectContainer: styles['active__select-container'],
    option: styles['active__sidebar-select--option'],
    optionsContainer: styles['active__sidebar-select--options'],
    defaultOption: styles['active__sidebar--select__default-option'],
    label: styles['active__sidebar--select-label'],
  };

  return (
    <aside className={styles['active__sidebar']}>
      <div className={styles['active__sidebar-container']}>
        <Select
          classNames={classNames}
          defaultValue="All Tasks"
          options={options}
        />
        <ActiveNav />
      </div>
    </aside>
  );
};
