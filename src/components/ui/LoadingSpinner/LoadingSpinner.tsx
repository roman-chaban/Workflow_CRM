import type { FC } from "react";

import styles from "./LoadingSpinner.module.scss";

export const LoadingSpinner: FC = () => {
  return (
    <div className={styles["loadingSpinner"]}>
      <div className={styles["loadingSpinnerContainer"]}></div>
    </div>
  );
};
