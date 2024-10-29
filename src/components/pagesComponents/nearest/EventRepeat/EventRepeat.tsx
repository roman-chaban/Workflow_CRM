import { FC, useState } from "react";

import { Button } from "@/components/ui/Button/Button";

import styles from "./EventRepeat.module.scss";
import { SwitcherButton } from "@/components/ui/buttons/SwitcherButton/SwitcherButton";
import { EventRepeatProperties } from "@/components/pagesComponents/nearest/EventRepeatProperties/EventRepeatProperties";

export const EventRepeat: FC = () => {
  const [isShowProperties, setIsShowProperties] = useState<boolean>(false);

  return (
    <div className={styles["eventRepeat"]}>
      <div className={styles["eventRepeatSwitcherBlock"]}>
        <div className={styles["eventRepeatSwitcher"]}>
          <h5 className={styles["eventRepeatSwitcherTitle"]}>Repeat Event</h5>
          <SwitcherButton
            classNames={{
              switcherButton: styles["switcherButton"],
              switcherCircle: styles["switcherCircle"],
              activeCircle: styles["switcherActive"],
              switcherBackground: styles["switcherBackground"],
            }}
            setShowProperties={setIsShowProperties}
          />
        </div>
        <div className={styles.propertiesContainer}>
          {isShowProperties && (
            <EventRepeatProperties isShowProperties={isShowProperties} />
          )}
        </div>
      </div>
      <Button type={"button"} className={styles["saveButton"]}>
        Save Event
      </Button>
    </div>
  );
};
