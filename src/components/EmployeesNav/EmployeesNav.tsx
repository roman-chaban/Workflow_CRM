import { type FC } from "react";

import { EmployeesNavButtons } from "../EmployeesNavButtons/EmployeesNavButtons";
import { Button } from "../index";
import { Plus } from "../icons/Plus/Plus";

import { ActiveTabs, isOpenedModal } from "@/app/employees/page";

import styles from "./EmployeesNav.module.scss";

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
  return (
    <div className={styles["employees__nav"]}>
      <h3 className={styles["employees__nav-title"]}>Employees</h3>
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
