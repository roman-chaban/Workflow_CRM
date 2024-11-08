import type { FC, ReactNode } from 'react';

import { Button } from '../Button/Button';
import { Heading, Plus } from '@/components/index';
import { isOpenedModal } from '@/app/employees/page';
import { NavigationTabs } from '../NavigationTabs/NavigationTabs';

import { ActiveTabs, GlobalTabs } from '@/types/tabs';

import styles from './NavigationBar.module.scss';

interface NavigationBarProps {
  heading: string;
  buttonLabel: ReactNode;
  isNavButtons: boolean;
  isOpened: isOpenedModal;
  setIsOpened: (isOpened: isOpenedModal) => void;
  setActiveTab: (tab: ActiveTabs) => void;
  tabs: GlobalTabs;
}

export const NavigationBar: FC<NavigationBarProps> = ({
  heading,
  buttonLabel,
  tabs = [],
  isNavButtons,
  isOpened,
  setIsOpened,
  setActiveTab,
}) => {
  return (
    <div className={styles['projectsNav']}>
      <Heading level="h1" className={styles['projectsNavTitle']}>
        {heading}
      </Heading>
      {isNavButtons && tabs.length > 0 && (
        <NavigationTabs tabs={tabs} setActiveTab={setActiveTab} />
      )}
      <Button
        onClick={() => setIsOpened(!isOpened)}
        type="button"
        className={styles['projectsNavButton']}
      >
        <Plus color="white" /> {buttonLabel}
      </Button>
    </div>
  );
};
