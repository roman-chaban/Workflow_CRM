"use client";

import { FC, useEffect } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";

import { Customer as CurrentCustomer } from "@/types/customers";

import { Customer } from "@/components/Customers/Customer/Customer";
import { fetchCustomers } from "@/store/slices/CustomersSlice";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";

import styles from "./Customers.module.scss";

export const Customers: FC = () => {
  const { customers, loading } = useAppSelector((state) => state.customers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  if (loading === "fulfilled")
    return (
      <div className={styles["customers"]}>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className={styles["customers"]}>
      <ul className={styles["customersList"]}>
        {customers.map((customer: CurrentCustomer) => (
          <Customer key={customer.customerId} customer={customer} />
        ))}
      </ul>
    </div>
  );
};
