"use client";

import { FC, useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";

import {
  CurrentPage,
  Customer as CurrentCustomer,
  ItemsPerPage,
} from "@/types/customers";

import { Customer, LoadingSpinner, Pagination } from "@/components/index/index";

import { fetchCustomers } from "@/store/slices/CustomersSlice";

import styles from "./Customers.module.scss";
import { DATA_STATES } from "@/enums/data-states";

export const Customers: FC = () => {
  const { customers, loading } = useAppSelector((state) => state.customers);
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState<CurrentPage>(1);
  const [itemsPerPage] = useState<ItemsPerPage>(6);

  const totalItems = customers.length;

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  if (loading === DATA_STATES.FULFILLED)
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
