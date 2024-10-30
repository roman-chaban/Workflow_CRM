"use client";

import { type FC, useState } from "react";

import { Button } from "../../ui/Button/Button";

import { Next, Previous } from "grommet-icons";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";

import styles from "./Calendar.module.scss";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

export const Calendar: FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const prevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const renderHeader = () => {
    return (
      <div className={styles.header}>
        <div className={styles["col-start"]} onClick={prevMonth}>
          <Button type="button" className={styles.icon}>
            <Previous color="black" style={{ width: 18, height: 18 }} />
          </Button>
        </div>
        <div className={styles["col-center"]}>
          <span>{currentDate.format("MMMM YYYY")}</span>
        </div>
        <div className={styles["col-end"]} onClick={nextMonth}>
          <Button type="button" className={styles.icon}>
            <Next color="black" style={{ width: 18, height: 18 }} />
          </Button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = currentDate.startOf("week");

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={styles["col-center"]} key={i}>
          {startDate.add(i, "day").format("ddd")}
        </div>,
      );
    }

    return <div className={styles.days}>{days}</div>;
  };

  const renderCells = () => {
    const monthStart = currentDate.startOf("month");
    const monthEnd = currentDate.endOf("month");
    const startDate = monthStart.startOf("week");
    const endDate = monthEnd.endOf("week");

    const rows: JSX.Element[] = [];
    let days: JSX.Element[] = [];
    let day = startDate;

    while (day.isBefore(endDate, "day")) {
      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = day.month() === currentDate.month();
        days.push(
          <div
            className={`${styles.cell} ${
              isCurrentMonth ? "" : styles.disabled
            }`}
            key={day.toString()}
            onClick={() => isCurrentMonth && setCurrentDate(day)}
          >
            <span className={styles.number}>{day.date()}</span>
          </div>,
        );
        day = day.add(1, "day");
      }
      rows.push(
        <div className={styles.row} key={day.toString()}>
          {days}
        </div>,
      );
      days = [];
    }

    return <div className={styles.body}>{rows}</div>;
  };

  return (
    <div className={styles.calendar}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};
