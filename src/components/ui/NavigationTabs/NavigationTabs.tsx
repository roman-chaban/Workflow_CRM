'use client';

import { useState, type FC } from 'react';

import { Button } from '@/components/index/index';

import { ActiveTabs, GlobalTabs } from '@/types/tabs';

import styles from './NavigationTabs.module.scss';

interface EmployeesNavButtonsProps {
  tabs: GlobalTabs;
  setActiveTab: (tab: ActiveTabs) => void;
}

export const NavigationTabs: FC<EmployeesNavButtonsProps> = ({
  tabs,
  setActiveTab,
}) => {
  const [activeTab, setActiveTabState] = useState<ActiveTabs>(
    tabs[0]?.value || 'list'
  );

  const handleChangeTab = (tabValue: ActiveTabs) => {
    setActiveTabState(tabValue);
    setActiveTab(tabValue);
  };

  return (
    <div className={styles['employees__nav-buttons']}>
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          type="button"
          className={`${styles[`${tab.value}__button`]} ${
            activeTab === tab.value ? styles['active'] : ''
          }`}
          onClick={() => handleChangeTab(tab.value)}
          ariaPressed={activeTab === tab.value}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};
