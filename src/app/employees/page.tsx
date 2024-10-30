"use client";

import { useState } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";

import { Grid } from "@/components/containers/Grid/Grid";
import { EmployeesNav } from "@/components/EmployeesElements/EmployeesNav/EmployeesNav";
import { EmployeesModal } from "@/components/ui/EmployeesModal/EmployeesModal";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Customers } from "@/components/CustomersElements/Customers/Customers";

import { closeModal, toggleModal } from "@/store/slices/EmployeesNavSlice";

export type isOpenedModal = boolean;
export type ActiveTabs = "list" | "activity";

export default function Employees() {
  const [activeTab, setActiveTab] = useState<ActiveTabs>("list");
  const isOpened = useAppSelector((state) => state.employeesNav.isOpened);
  const dispatch = useAppDispatch();

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const renderContentByTabs = () => {
    switch (activeTab) {
      case "activity":
        return <div>Activity</div>;
      case "list":
        return <Customers />;
    }
  };

  return (
    <Grid
      tag={"section"}
      height={"100%"}
      position="relative"
      gridTemplateRows={"none"}
      gap={"28px"}
    >
      <EmployeesNav
        isOpened={isOpened}
        setIsOpened={handleToggleModal}
        setActiveTab={setActiveTab}
      />
      <EmployeesModal isOpened={isOpened} onClosed={handleCloseModal} />

      {renderContentByTabs()}
    </Grid>
  );
}
