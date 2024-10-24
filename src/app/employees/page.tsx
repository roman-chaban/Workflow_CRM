'use client';

import { Grid } from '@/components/containers/Grid/Grid';

import { EmployeesNav } from '@/components/EmployeesNav/EmployeesNav';
import { EmployeesModal } from '@/components/ui/EmployeesModal/EmployeesModal';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { closeModal, toggleModal } from '@/store/slices/EmployeesNavSlice';

export type isOpenedModal = boolean;

export default function Employees() {
  const isOpened = useAppSelector((state) => state.employeesNav.isOpened);
  const dispatch = useAppDispatch();

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Grid height={'100%'} tag={'section'} position="relative">
      <EmployeesNav isOpened={isOpened} setIsOpened={handleToggleModal} />
      <EmployeesModal isOpened={isOpened} onClosed={handleCloseModal} />
    </Grid>
  );
}
