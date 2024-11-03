"use client";

import { FC, useEffect } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";

import { LoadingSpinner, Employees, ViewLink } from "@/components/index/index";

import { DATA_STATES } from "@/enums/data-states";
import { PATHS } from "@/enums/paths";

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

  if (loading === DATA_STATES.FULFILLED)
    return (
      <div className={styles["workload"]}>
        <LoadingSpinner />
      </div>
    );

  if (loading === DATA_STATES.FAILED)
    return <div>Employees Error: {error}</div>;

  return (
    <div className={styles["workload"]}>
      <div className={styles["workload__container"]}>
        <div className={styles["workload__header"]}>
          <ViewLink href={PATHS.EMPLOYEES}>Workload</ViewLink>
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
