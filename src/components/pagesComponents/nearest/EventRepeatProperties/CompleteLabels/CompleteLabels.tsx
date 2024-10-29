import { type FC, useState } from "react";

import { Button } from "@/components/ui/Button/Button";

import { CompleteLabel, completeLabels } from "@/constants/completeLabels";

import styles from "./CompleteLabels.module.scss";

export const CompleteLabels: FC = () => {
  const [completeTab, setCompleteTab] = useState<number>(1);

  const changeTab = (id: number) => {
    setCompleteTab(id);
  };

  return (
    <div className={styles["completeLabelsBlock"]}>
      <span className={styles["completeLabel"]}>
        Complete this task
      </span>
      <ul className={styles["completeLabels"]}>
        {completeLabels.map((label: CompleteLabel) => (
          <li key={label.id} style={{ width: "100%" }}>
            <Button
              onClick={() => changeTab(label.id)}
              type={"button"}
              className={`${styles["completeLabelButton"]} ${completeTab === label.id ? styles["active"] : ""}`}
            >
              {label.completeLabel}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
