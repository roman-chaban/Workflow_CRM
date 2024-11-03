import type { FC } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Plus } from "@/components/ui/icons/Plus/Plus";

import { TimeTrackerMenu } from "@/components/InfoProtalElements/SlugComponents/TimeTracker/TimeTrackerMenu/TimeTrackerMenu";

import styles from "./TimeTrackerSidebar.module.scss";

export const TimeTrackerSidebar: FC = () => {
  return (
    <aside className={styles["sidebar"]}>
      <div className={styles["sidebarContainer"]}>
        <div className={styles["sidebarHeader"]}>
          <h6 className={styles["sidebarHeaderTitle"]}>Pages</h6>
          <Button type={"button"} className={styles["sidebarHeaderButton"]}>
            <Plus color={"white"} />
          </Button>
        </div>
        <TimeTrackerMenu />
      </div>
    </aside>
  );
};
