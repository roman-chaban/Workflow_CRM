import type { FC } from 'react';

import styles from './ProjectsSidebar.module.scss';
import { Select } from '@/components/index';
import { ProjectsSidebarNav } from '../ProjectsSidebarNav/ProjectsSidebarNav';
import { items } from '@/constants/nav';

const options = [
  { value: 'current', label: 'Current Projects' },
  { value: 'past', label: 'Past Projects' },
  { value: 'future', label: 'Future Projects' },
];

export const ProjectsSidebar: FC = () => {
  const classNames = {
    select: styles['sidebar__select'],
    selectContainer: styles['select__container'],
    option: styles['select__option'],
    optionsContainer: styles['select__options'],
    defaultOption: styles['select__default-option'],
    label: styles['select__label'],
  };

  return (
    <aside className={styles['sidebar']}>
      <Select
        classNames={classNames}
        defaultValue="Current Projects"
        options={options}
      />
      <ProjectsSidebarNav items={items} />
    </aside>
  );
};
