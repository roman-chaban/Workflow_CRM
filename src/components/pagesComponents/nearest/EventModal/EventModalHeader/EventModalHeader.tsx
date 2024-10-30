import type { FC } from "react";

import styles from "./EventModalHeader.module.scss";
import { Button } from "@/components/ui/Button/Button";
import { Close } from "@/components/ui/icons/Close/Close";

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
