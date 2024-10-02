import type { CSSProperties, FC } from 'react';
import { Employee as CurrentEmployee } from '@/types/employees';
import styles from './Employee.module.scss';
import Image from 'next/image';

interface EmployeeProps {
  employee: CurrentEmployee;
}

export const Employee: FC<EmployeeProps> = ({ employee }) => {
  return (
    <div className={styles['employee']}>
      <div className={styles['employee__container']}>
        <div
          className={styles['employee__progressBorder']}
          style={{ '--employment': `${employee.employment}` } as CSSProperties}
        >
          <Image
            className={styles['employee__image']}
            priority
            src={employee.image}
            alt={employee.fullName}
            width={50}
            height={50}
          />
        </div>
        <div className={styles['employee__info']}>
          <h4 className={styles['employee__fullName']}>{employee.fullName}</h4>
          <span className={styles['employee__role']}>{employee.role}</span>
        </div>
        <span className={styles['employee__position']}>
          {employee.position}
        </span>
      </div>
    </div>
  );
};
