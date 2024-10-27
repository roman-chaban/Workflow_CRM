import { type FC } from "react";

import styles from "./EmployeesNav.module.scss";
import { EmployeesNavButtons } from "../EmployeesNavButtons/EmployeesNavButtons";
import { Button } from "../index";
import { Plus } from "../icons/Plus/Plus";
import { isOpenedModal } from "@/app/employees/page";

interface EmployeesNavProps {
  isOpened: boolean;
  setIsOpened: (isOpened: isOpenedModal) => void;
}

export const EmployeesNav: FC<EmployeesNavProps> = ({
  isOpened,
  setIsOpened,
}) => {
  return (
    <div className={styles["employees__nav"]}>
      <h3 className={styles["employees__nav-title"]}>Employees</h3>
      <EmployeesNavButtons />
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
