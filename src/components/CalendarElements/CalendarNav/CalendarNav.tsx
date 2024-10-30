import type { FC } from "react";

import { Button } from "../../index";
import { Plus } from "@/components/ui/icons/Plus/Plus";

import styles from "./CalendarNav.module.scss";

export const CalendarNav: FC = () => {
  return (
    <nav className={styles["calendarNav"]}>
      <h1 className={styles["calendarNavTitle"]}>Calendar</h1>
      <Button type="button" className={styles["calendarNavButton"]}>
        <Plus color="white" />
        Add Event
      </Button>
    </nav>
  );
};
