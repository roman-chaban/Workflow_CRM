import type { FC } from "react";

import styles from "./MessengerHeader.module.scss";

import { SearchButton } from "@/components/ui/buttons/SearchButton/SearchButton";
import { NotificationButton } from "@/components/ui/buttons/NotificationButton/NotificationButton";
import { MoreButton } from "@/components/ui/buttons/MoreButton/MoreButton";

export const MessengerHeader: FC = () => {
  return (
    <div className={styles["messengerHeader"]}>
      <div>Account Information</div>
      <div className={styles["messengerHeaderButtons"]}>
        <SearchButton className={styles["searchButton"]} />
        <NotificationButton className={styles["notificationButton"]} />
        <MoreButton className={styles["moreButton"]} />
      </div>
    </div>
  );
};
