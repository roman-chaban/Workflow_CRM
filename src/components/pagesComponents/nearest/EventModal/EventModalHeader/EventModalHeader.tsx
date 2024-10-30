import type { FC } from "react";

import styles from "./EventModalHeader.module.scss";
import { Button, Close } from "@/components/index/index";

interface EventModalHeaderProps {
  onCloseModal: () => void;
}

export const EventModalHeader: FC<EventModalHeaderProps> = ({
  onCloseModal,
}) => {
  return (
    <div className={styles["eventModalHeader"]}>
      <h4 className={styles["eventModalHeaderTitle"]}>Add Event</h4>
      <Button
        type={"button"}
        className={styles["eventModalHeaderCloseButton"]}
        onClick={onCloseModal}
      >
        <Close />
      </Button>
    </div>
  );
};
