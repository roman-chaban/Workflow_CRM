"use client";

import { type FC } from "react";

import { Button, EmployeesNavButtons, Plus } from "../../index";

import { ActiveTabs, isOpenedModal } from "@/app/employees/page";

import styles from "./EmployeesNav.module.scss";
import { useAppSelector } from "@/hooks/useAppSelector";

interface EmployeesNavProps {
  isOpened: isOpenedModal;
  setIsOpened: (isOpened: isOpenedModal) => void;
  setActiveTab: (tab: ActiveTabs) => void;
}

export const EmployeesNav: FC<EmployeesNavProps> = ({
  isOpened,
  setIsOpened,
  setActiveTab,
}) => {
  const employees = useAppSelector((state) => state.customers.customers);

  return (
    <div className={styles["employees__nav"]}>
      <h3 className={styles["employees__nav-title"]}>
        Employees ({employees.length})
      </h3>
      <EmployeesNavButtons setActiveTab={setActiveTab} />
      <Button
        type="button"
        className={styles["add__employee-button"]}
        onClick={() => setIsOpened(!isOpened)}
      >
        <Plus color="white" /> Add Employee
      </Button>
    </div>
  );
};
