import { useCallback, type FC, useEffect, useState } from 'react';
import styles from './FiltersBoard.module.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { onCloseFilterBoard } from '@/store/slices/FiltersBoardSlice';
import { PeriodInput } from '../ui/PeriodInput/PeriodInput';
import { TaskGroup } from '../TaskGroup/TaskGroup';
import { FiltersBoardHeader } from '../FilterBoardHeader/FilterBoardHeader';

export type FiltersBoardProps = {
  isClosedBoard: boolean;
};

export const FiltersBoard: FC<FiltersBoardProps> = ({ isClosedBoard }) => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseBoard = useCallback(() => {
    dispatch(onCloseFilterBoard());
  }, [dispatch]);

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
          className={`${styles['filters__board-container']} ${
            isClosedBoard ? styles['is-closing'] : styles['is-open']
          }`}
        >
          <FiltersBoardHeader handleCloseBoard={handleCloseBoard} />
          <div className={styles['filters__board-main']}>
            <PeriodInput />
            <TaskGroup />
          </div>
        </aside>
      )}
    </div>
  );
};
