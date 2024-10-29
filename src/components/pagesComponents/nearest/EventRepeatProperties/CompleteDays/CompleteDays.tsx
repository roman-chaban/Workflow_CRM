import { type FC, useState } from "react";

import { Button } from "@/components/ui/Button/Button";

import { Day, days } from "@/constants/days";

import styles from "./CompleteDays.module.scss";

export const CompleteDays: FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);

  const changeDay = (id: number) => {
    setActiveDay(id);
  };

  return (
    <div className={styles["completeDaysBlock"]}>
      <span className={styles["completeLabel"]}>On these days</span>
      <ul className={styles["completeLabels"]}>
        {days.map((day: Day) => (
          <li key={day.id} style={{ width: "100%" }}>
            <Button
              onClick={() => changeDay(day.id)}
              type={"button"}
              className={`${styles["completeDayButton"]} ${activeDay === day.id ? styles["active"] : ""}`}
            >
              {day.day}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
