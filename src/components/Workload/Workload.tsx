"use client";

import { FC, useEffect } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";

import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { Employees } from "../Employees/Employees";
import { ViewLink } from "../ui/ViewLink/ViewLink";

import { fetchEmployees } from "@/store/slices/EmployeesSlice";

import styles from "./Workload.module.scss";

export const Workload: FC = () => {
  const {
    entities: employees,
    loading,
    error,
  } = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading === "pending")
    return (
      <div className={styles["workload"]}>
        <LoadingSpinner />
      </div>
    );

  if (loading === "failed") return <div>Employees Error: {error}</div>;

  return (
    <div className={styles["workload"]}>
      <div className={styles["workload__container"]}>
        <div className={styles["workload__header"]}>
          <ViewLink>Workload</ViewLink>
        </div>

        {employees && Array.isArray(employees) ? (
          <Employees employees={employees} />
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};
