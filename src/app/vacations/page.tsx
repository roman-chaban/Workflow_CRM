"use client";

import { useState } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";

import {
  Grid,
  EmployeesModal,
  FiltersBoard,
  VacationsCalendar,
} from "@/components/index/index";
import { NavigationBar } from "@/components/ui/NavigationBar/NavigationBar";

import { ActiveTabs, GlobalTabs } from "@/types/tabs";

import { closeModal, toggleModal } from "@/store/slices/EmployeesNavSlice";

export type isOpenedModal = boolean;

export default function Employees() {
  const [activeTab, setActiveTab] = useState<ActiveTabs>("list");
  const isOpened = useAppSelector((state) => state.employeesNav.isOpened);
  const isOpenBoard = useAppSelector((state) => state.filterSlice.isOpen);
  const dispatch = useAppDispatch();

  const tabs: GlobalTabs = [
    { label: "Employees’ vacations", value: "list" },
    { label: "Calendar", value: "activity" },
  ];

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const renderContentByTabs = () => {
    switch (activeTab) {
      case "activity":
        return <VacationsCalendar />;
      case "list":
        return <div>Employee</div>;
      default:
        return null;
    }
  };

  return (
    <Grid
      tag={"section"}
      height={"100%"}
      position="relative"
      gridTemplateRows={"0fr"}
      gap={"28px"}
    >
      <NavigationBar
        heading="Vacations"
        buttonLabel="Add Request"
        isNavButtons
        isOpened={isOpened}
        setIsOpened={handleToggleModal}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      {isOpenBoard && <FiltersBoard isClosedBoard={!isOpenBoard} />}
      <EmployeesModal isOpened={isOpened} onClosed={handleCloseModal} />
      {renderContentByTabs()}
    </Grid>
  );
}
