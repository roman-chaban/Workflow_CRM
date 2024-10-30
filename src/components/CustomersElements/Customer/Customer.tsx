import type { FC } from "react";

import { Customer as CurrentCustomer } from "@/types/customers";

import styles from "./Customer.module.scss";
import Image from "next/image";
import { CustomerHeader } from "@/components/CustomersElements/CustomerHeader/CustomerHeader";

interface CustomerProps {
  customer: CurrentCustomer;
}

export const Customer: FC<CustomerProps> = ({ customer }) => {
  return (
    <div className={styles["customer"]}>
      <div className={styles["customerContainer"]}>
        <div className={styles["customerPrimaryInfo"]}>
          <Image
            src={customer.icon}
            alt={customer.customerName}
            width={54}
            height={54}
          />
          <div className={styles["customerPrimaryInfoTitles"]}>
            <h4 className={styles["customerPrimaryInfoTitle"]}>
              {customer.customerName}
            </h4>
            <span className={styles["customerPrimaryInfoEmail"]}>
              {customer.email}
            </span>
          </div>
        </div>
        <CustomerHeader title={customer.gender} subtitle={"Gender"} />
        <CustomerHeader title={customer.birthday} subtitle={"Birthday"} />
        <CustomerHeader title={customer.fullAge} subtitle={"Full age"} />
        <CustomerHeader title={customer.position} subtitle={"Position"} />
      </div>
    </div>
  );
};
