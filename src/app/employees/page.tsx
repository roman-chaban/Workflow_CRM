"use client";

import { Grid } from "@/components/containers/Grid/Grid";

import { EmployeesNav } from "@/components/EmployeesNav/EmployeesNav";
import { EmployeesModal } from "@/components/ui/EmployeesModal/EmployeesModal";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { closeModal, toggleModal } from "@/store/slices/EmployeesNavSlice";
import { Customers } from "@/components/Customers/Customers";

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
    <Grid
      tag={"section"}
      height={"100%"}
      position="relative"
      gridTemplateRows={"none"}
      gap={"28px"}
    >
      <EmployeesNav isOpened={isOpened} setIsOpened={handleToggleModal} />
      <EmployeesModal isOpened={isOpened} onClosed={handleCloseModal} />
      <Customers />
    </Grid>
  );
}
