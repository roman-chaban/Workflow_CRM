'use client';

import { useMemo, useState, type FC } from 'react';

import styles from './CalendarActive.module.scss';
import { Prev } from '../icons/Prev/Prev';
import { Next } from '../icons/Next/Next';
import { Button } from '../index';

const navButtonsInlineStyles = {
  background: 'inherit',
  display: 'flex',
  alignItems: 'center',
};

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstWorkingDay = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay === 0 ? 1 : firstDay;
};

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const CalendarActive: FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(2024);
  const [currentMonth, setCurrentMonth] = useState<number>(10);

  const calendarDays: Array<JSX.Element> = [];

  const daysInMonth = useMemo(
    () => getDaysInMonth(currentYear, currentMonth),
    [currentYear, currentMonth]
  );

  const firstWorkingDay = useMemo(
    () => getFirstWorkingDay(currentYear, currentMonth),
    [currentYear, currentMonth]
  );

  for (let i = 0; i < daysOfWeek.length; i++) {
    calendarDays.push(
      <div key={daysOfWeek[i]} className={styles['dayOfWeek']}>
        <div className={styles['dayLabel']}>{daysOfWeek[i]}</div>
        <div className={styles['dayNumber']}>
          {i + 1 <= daysInMonth ? i + 1 : ''}
        </div>
      </div>
    );
  }

  for (let day = 6; day <= daysInMonth; day++) {
    const dayOfWeek = (firstWorkingDay + day - 1) % 7;
    if (dayOfWeek !== 6 && dayOfWeek !== 0) {
      calendarDays.push(
        <div key={day} className={styles['dayOfWeek']}>
          {day}
        </div>
      );
    }
  }

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (currentMonth === 0) setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    if (currentMonth === 11) setCurrentYear((prevYear) => prevYear + 1);
  };

  return (
    <div className={styles['calendarTableContainer']}>
      <div className={styles['calendarTable']}>
        <div className={styles['calendarTableHead']}>
          <Button
            type="button"
            style={navButtonsInlineStyles}
            onClick={handlePrevMonth}
          >
            <Prev />
          </Button>
          <div className={styles['calendarTableHeadTitle']}>
            {new Date(currentYear, currentMonth).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </div>
          <Button
            type="button"
            style={navButtonsInlineStyles}
            onClick={handleNextMonth}
          >
            <Next />
          </Button>
        </div>
        <div className={styles['calendarTableBody']}>{calendarDays}</div>
      </div>
    </div>
  );
};
