import type { FC } from "react";

import { Customer as CurrentCustomer } from "@/types/customers";

import styles from "./Customer.module.scss";

interface CustomerProps {
  customer: CurrentCustomer;
}

export const Customer: FC<CustomerProps> = ({ customer }) => {
  return <div className={styles["customer"]}>{customer.customerName}</div>;
};
