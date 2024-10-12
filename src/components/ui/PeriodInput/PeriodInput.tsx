'use client';

import { memo, useState, type FC } from 'react';

import { Input } from '../Input/Input';

import styles from '@/components/FiltersBoard/FiltersBoard.module.scss';

import Image from 'next/image';

export const PeriodInput: FC = memo(() => {
  const [date, setDate] = useState('');

  return (
    <div className={styles['period']}>
      <Input
        classNames={{
          input: styles['period__input'],
          label: styles['period__label'],
          labelText: styles['period__label-text'],
        }}
        inputIcon={
          <Image
            src={'/icons/dashBoardIcons/calendar-board.svg'}
            alt="Calendar Icon"
            width={24}
            height={24}
            className={styles['period__icon']}
          />
        }
        properties={{
          label: 'Period',
          htmlFor: 'period',
          id: 'period',
          name: 'period',
          type: 'text',
          placeholder: 'Select Period',
          value: date,
          onChange: (event) => setDate(event.target.value),
        }}
      />
    </div>
  );
});

PeriodInput.displayName = 'PeriodInput';
