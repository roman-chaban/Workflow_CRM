'use client';

import { useState, type FC } from 'react';

import { Button } from '../index';

import styles from '@/components/EmployeesNav/EmployeesNav.module.scss';

type ActiveTabs = 'list' | 'activity';

export const EmployeesNavButtons: FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabs>('list');

  const handleChangeTab = (tab: 'activity' | 'list') => {
    setActiveTab(tab);
  };
  return (
    <div className={styles['employees__nav-buttons']}>
      <Button
        type={'button'}
        className={`${styles['list__button']} ${
          activeTab === 'list' ? styles['active'] : ''
        }`}
        onClick={() => handleChangeTab('list')}
        ariaPressed={activeTab === 'list'}
      >
        List
      </Button>
      <Button
        type={'button'}
        className={`${styles['activity__button']} ${
          activeTab === 'activity' ? styles['active'] : ''
        }`}
        onClick={() => handleChangeTab('activity')}
        ariaPressed={activeTab === 'activity'}
      >
        Activity
      </Button>
    </div>
  );
};
