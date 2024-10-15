'use client';

import { useCallback, type FC, useEffect, useState, useRef } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';

import styles from './FiltersBoard.module.scss';

import { onCloseFilterBoard } from '@/store/slices/FiltersBoardSlice';

import { PeriodInput, FiltersBoardHeader, TaskGroup } from '../index';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { Reporter } from '../Reporter/Reporter';
import { Assignees } from '../Assignees/Assignees';

export type FiltersBoardProps = {
  isClosedBoard: boolean;
};

export const FiltersBoard: FC<FiltersBoardProps> = ({ isClosedBoard }) => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(true);
  const boardRef = useRef<HTMLElement>(null);

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
    <div className={styles['filters__board']}>
      {isVisible && (
        <aside
          ref={boardRef}
          className={`${styles['filters__board-container']} ${
            isClosedBoard ? styles['is-closing'] : styles['is-open']
          }`}
        >
          <FiltersBoardHeader handleCloseBoard={handleCloseBoard} />
          <div className={styles['filters__board-main']}>
            <PeriodInput />
            <TaskGroup />
            <Reporter />
            <Assignees />
          </div>
        </aside>
      )}
    </div>
  );
};
