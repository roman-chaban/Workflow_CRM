import type { FC } from "react";

import { Button } from "@/components/ui/Button/Button";

import styles from "./EventRepeat.module.scss";
import { SwitcherButton } from "@/components/ui/buttons/SwitcherButton/SwitcherButton";

export const EventRepeat: FC = () => {
  return (
    <div className={styles["eventRepeat"]}>
      <div className={styles["eventRepeatSwitcher"]}>
        <h5 className={styles["eventRepeatSwitcherTitle"]}>Repeat Event</h5>
        <SwitcherButton
          classNames={{
            switcherButton: styles["switcherButton"],
            switcherCircle: styles["switcherCircle"],
            activeCircle: styles["switcherActive"],
          }}
        />
      </div>
      <Button type={"button"} className={styles["saveButton"]}>
        Save Event
      </Button>
    </div>
  );
};
