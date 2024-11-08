'use client';

import { useState } from 'react';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

import { Grid, Customers, EmployeesModal } from '@/components/index/index';
import { NavigationBar } from '@/components/ui/NavigationBar/NavigationBar';

import { ActiveTabs, GlobalTabs } from '@/types/tabs';

import { closeModal, toggleModal } from '@/store/slices/EmployeesNavSlice';

export type isOpenedModal = boolean;

export default function Employees() {
  const [activeTab, setActiveTab] = useState<ActiveTabs>('list');
  const isOpened = useAppSelector((state) => state.employeesNav.isOpened);
  const employees = useAppSelector((state) => state.customers.customers);
  const dispatch = useAppDispatch();

  const currentEmployees = `Employees (${employees.length})`;

  const tabs: GlobalTabs = [
    { label: 'List', value: 'list' },
    { label: 'Activity', value: 'activity' },
  ];

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const renderContentByTabs = () => {
    switch (activeTab) {
      case 'activity':
        return <div>Activity</div>;
      case 'list':
        return <Customers />;
      default:
        return null;
    }
  };

  return (
    <Grid
      tag={'section'}
      height={'100%'}
      position="relative"
      gridTemplateRows={'0fr'}
      gap={'28px'}
    >
      <NavigationBar
        heading={currentEmployees}
        buttonLabel="Add Employee"
        isNavButtons
        isOpened={isOpened}
        setIsOpened={handleToggleModal}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      <EmployeesModal isOpened={isOpened} onClosed={handleCloseModal} />
      {renderContentByTabs()}
    </Grid>
  );
}
