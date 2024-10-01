'use client';

import type { FC } from 'react';
import { useState } from 'react';
import styles from './DashboardInfo.module.scss';
import { Calendar } from '../Calendar/Calendar';
import formatTodayDate from '@/utils/formateDate';
import Image from 'next/image';

export const DashboardInfo: FC = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarVisible((prev) => !prev);
  };

  return (
    <div className={styles['dashboard__info']}>
      <div className={styles['dashboard__info-block']}>
        <h5 className={styles['dashboard__info-greeting']}>
          Welcome back, John Doe!
        </h5>
        <h1 className={styles['dashboard__info-title']}>Dashboard</h1>
      </div>

      <button
        className={styles['toggle-calendar-button']}
        onClick={toggleCalendar}
      >
        <Image
          src="/icons/outlinedIcons/calendar.svg"
          alt="Calendar Icon"
          width={22}
          height={22}
        />
        {formatTodayDate()}
      </button>

      {isCalendarVisible && (
        <div className={`${styles['dashboard__calendar']} ${styles.visible}`}>
          <div className={styles['calendar__date']}></div>
          <Calendar />
        </div>
      )}
    </div>
  );
};
