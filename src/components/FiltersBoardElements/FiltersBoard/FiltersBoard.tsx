"use client";

import { useCallback, type FC, useEffect, useState, useRef } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

import { onCloseFilterBoard } from "@/store/slices/FiltersBoardSlice";

import {
  PeriodInput,
  FiltersBoardHeader,
  TaskGroup,
  Reporter,
  Assignees,
  Estimate,
  FiltersBoardFooter,
} from "../../index";

import styles from "./FiltersBoard.module.scss";

export type FiltersBoardProps = {
  isClosedBoard: boolean;
};

export const FiltersBoard: FC<FiltersBoardProps> = ({ isClosedBoard }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const boardRef = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();

  const handleCloseBoard = useCallback(() => {
    dispatch(onCloseFilterBoard());
  }, [dispatch]);

  useOnClickOutside(boardRef, handleCloseBoard);

  useEffect(() => {
    if (isClosedBoard) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isClosedBoard]);

  return (
    <div className={styles["filters__board"]}>
      {isVisible && (
        <aside
          ref={boardRef}
          className={`${styles["filters__board-container"]} ${
            isClosedBoard ? styles["is-closing"] : styles["is-open"]
          }`}
        >
          <FiltersBoardHeader handleCloseBoard={handleCloseBoard} />
          <div className={styles["filters__board-main"]}>
            <PeriodInput />
            <TaskGroup />
            <Reporter />
            <Assignees />
            <Estimate />
            <FiltersBoardFooter />
          </div>
        </aside>
      )}
    </div>
  );
};
