import type { FC } from "react";

import { SearchButton, AddButton } from "@/components/index/index";

import styles from "./MessengerBar.module.scss";

export const MessengerBar: FC = () => {
  return (
    <aside className={styles["messengerBarChatUsers"]}>
      <div className={styles["messengerBar"]}>
        <div className={styles["messengerBarHeader"]}>
          <h4 className={styles["messengerBarHeaderTitle"]}>Conversations</h4>
          <div className={styles["messengerBarHeaderButtons"]}>
            <SearchButton className={styles["searchButton"]} />
            <AddButton className={styles["addButton"]} />
          </div>
        </div>
      </div>
    </aside>
  );
};
