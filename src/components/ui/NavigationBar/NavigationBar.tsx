'use client';

import type { FC, ReactNode } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';

import { Button } from '../Button/Button';
import { Heading, Plus } from '@/components/index';
import { isOpenedModal } from '@/app/employees/page';
import { NavigationTabs } from '../NavigationTabs/NavigationTabs';

import { ActiveTabs, GlobalTabs } from '@/types/tabs';

import { toggleFilterBoard } from '@/store/slices/FiltersBoardSlice';

import { Notification } from '../icons/Notification/Notification';

import styles from './NavigationBar.module.scss';

interface NavigationBarProps {
  heading: string;
  buttonLabel: ReactNode;
  isNavButtons: boolean;
  isOpened: isOpenedModal;
  isFilterBoardButton?: boolean;
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
  isFilterBoardButton,
}) => {
  const dispatch = useAppDispatch();

  const handleOpenFilterBoard = () => {
    dispatch(toggleFilterBoard());
  };

  return (
    <div className={styles['projectsNav']}>
      <Heading level="h1" className={styles['projectsNavTitle']}>
        {heading}
      </Heading>
      {isNavButtons && tabs.length > 0 && (
        <NavigationTabs tabs={tabs} setActiveTab={setActiveTab} />
      )}
      <div className={styles['projectsNavButtonsBlock']}>
        {isFilterBoardButton && (
          <Button
            type="button"
            className={styles['notificationsButton']}
            onClick={handleOpenFilterBoard}
          >
            <Notification />
          </Button>
        )}

        <Button
          onClick={() => setIsOpened(!isOpened)}
          type="button"
          className={styles['projectsNavButton']}
        >
          <Plus color="white" /> {buttonLabel}
        </Button>
      </div>
    </div>
  );
};
