"use client";

import { FC, useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";

import {
  CurrentPage,
  Customer as CurrentCustomer,
  ItemsPerPage,
} from "@/types/customers";

import { Customer } from "@/components/CustomersElements/Customer/Customer";
import { fetchCustomers } from "@/store/slices/CustomersSlice";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { Pagination } from "@/components/ui/Pagination/Pagination";

import styles from "./Customers.module.scss";

export const Customers: FC = () => {
  const { customers, loading } = useAppSelector((state) => state.customers);
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState<CurrentPage>(1);
  const [itemsPerPage] = useState<ItemsPerPage>(6);

  const totalItems = customers.length;

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  if (loading === "fulfilled")
    return (
      <div className={styles["customers"]}>
        <LoadingSpinner />
      </div>
    );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = customers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles["customers"]}>
      <ul className={styles["customersList"]}>
        {currentCustomers.map((customer: CurrentCustomer) => (
          <Customer key={customer.customerId} customer={customer} />
        ))}
      </ul>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
