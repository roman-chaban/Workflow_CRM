import { TEmployees, Employee as CurrentEmployee } from '@/types/employees';
import type { FC } from 'react';
import styles from './Employees.module.scss';
import { Employee } from './Employee/Employee';

interface EmployeesProps {
  employees: TEmployees;
}

export const Employees: FC<EmployeesProps> = ({ employees }) => {
  return (
    <div className={styles['employees']}>
      {employees.map((employee: CurrentEmployee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
};
