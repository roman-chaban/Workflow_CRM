"use client";

import { useMemo, useState, type FC } from "react";

import { Prev } from "@/components/ui/icons/Prev/Prev";
import { Next } from "@/components/ui/icons/Next/Next";
import { Button } from "../../index";

import {
  ButtonInlineStyles,
  CalendarDays,
  CurrentMonth,
  CurrentYear,
  DaysOfWeek,
} from "@/types/calendar-active";

import { getDaysInMonth, getFirstWorkingDay } from "@/fixtures/getDate/getDate";

import styles from "./CalendarActive.module.scss";

const navButtonsInlineStyles: ButtonInlineStyles = {
  background: "inherit",
  display: "flex",
  alignItems: "center",
};

const daysOfWeek: DaysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export const CalendarActive: FC = () => {
  const [currentYear, setCurrentYear] = useState<CurrentYear>(2024);
  const [currentMonth, setCurrentMonth] = useState<CurrentMonth>(9);

  const calendarDays: CalendarDays = [];

  const daysInMonth = useMemo(
    () => getDaysInMonth(currentYear, currentMonth),
    [currentYear, currentMonth],
  );

  const firstWorkingDay = useMemo(
    () => getFirstWorkingDay(currentYear, currentMonth),
    [currentYear, currentMonth],
  );

  for (let i = 0; i < daysOfWeek.length; i++) {
    calendarDays.push(
      <div key={daysOfWeek[i]} className={styles["dayOfWeek"]}>
        <div className={styles["dayLabel"]}>{daysOfWeek[i]}</div>
        <div className={styles["dayNumber"]}>
          {i + 1 <= daysInMonth ? i + 1 : ""}
        </div>
      </div>,
    );
  }

  for (let day = 6; day <= daysInMonth; day++) {
    const dayOfWeek = (firstWorkingDay + day - 1) % 7;
    if (dayOfWeek !== 6 && dayOfWeek !== 0) {
      calendarDays.push(
        <div key={day} className={styles["dayOfWeek"]}>
          {day}
        </div>,
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
    <div className={styles["calendarTableContainer"]}>
      <div className={styles["calendarTable"]} data-calendar="CalendarTable">
        <nav className={styles["calendarTableHead"]}>
          <Button
            type="button"
            style={navButtonsInlineStyles}
            onClick={handlePrevMonth}
          >
            <Prev />
          </Button>
          <h2 className={styles["calendarTableHeadTitle"]}>
            {new Date(currentYear, currentMonth).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </h2>
          <Button
            type="button"
            style={navButtonsInlineStyles}
            onClick={handleNextMonth}
          >
            <Next />
          </Button>
        </nav>
        <div className={styles["calendarTableBody"]}>{calendarDays}</div>
      </div>
    </div>
  );
};
