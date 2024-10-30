import type { FC } from "react";

import styles from "../Customer/Customer.module.scss";

interface CustomerHeaderProps {
  title: string;
  subtitle: string;
}

export const CustomerHeader: FC<CustomerHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={styles["customerHeader"]}>
      <span className={styles["customerHeaderSubtitle"]}>{subtitle}</span>
      <h5 className={styles["customerHeaderTitle"]}>{title}</h5>
    </div>
  );
};
