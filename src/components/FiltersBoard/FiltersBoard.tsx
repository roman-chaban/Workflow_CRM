import type { FC } from 'react';

import styles from './FiltersBoard.module.scss';
import { Button } from '../index';
import { CloseIcon } from '../ui/CloseIcon/CloseIcon';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { onCloseFilterBoard } from '@/store/slices/FiltersBoardSlice';
import { PeriodInput } from '../ui/PeriodInput/PeriodInput';

export const FiltersBoard: FC = () => {
  const dispatch = useAppDispatch();

  const handleCloseBoard = () => {
    dispatch(onCloseFilterBoard());
  };

  return (
    <div className={styles['filters__board']}>
      <aside className={styles['filters__board-container']}>
        <div className={styles['filters__board-header']}>
          <h5 className={styles['filters__board-header--title']}>Filters</h5>
          <Button
            type="button"
            className={styles['filters__board-header--close']}
            onClick={handleCloseBoard}
          >
            <CloseIcon className={styles['close__icon']} />
          </Button>
        </div>
        <div className={styles['filters__board-main']}>
          <PeriodInput />
        </div>
      </aside>
    </div>
  );
};
