import type { FC } from "react";

import { TEmployees, Employee as CurrentEmployee } from "@/types/employees";

import { Employee } from "@/components/index/index";

import styles from "./Employees.module.scss";

interface EmployeesProps {
  employees: TEmployees;
}

export const Employees: FC<EmployeesProps> = ({ employees }) => {
  return (
    <div className={styles["employees"]}>
      {employees.map((employee: CurrentEmployee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
};
