import { memo, type FC } from "react";

import { Button, CloseIcon } from "@/components/index/index";

import styles from "@/components/FiltersBoardElements/FiltersBoard/FiltersBoard.module.scss";

export type FiltersBoardHeaderProps = {
  handleCloseBoard: () => void;
};

export const FiltersBoardHeader: FC<FiltersBoardHeaderProps> = memo(
  ({ handleCloseBoard }) => {
    return (
      <div className={styles["filters__board-header"]}>
        <h5 className={styles["filters__board-header--title"]}>Filters</h5>
        <Button
          type="button"
          className={styles["filters__board-header--close"]}
          onClick={handleCloseBoard}
        >
          <CloseIcon className={styles["close__icon"]} />
        </Button>
      </div>
    );
  },
);

FiltersBoardHeader.displayName = "FiltersBoardHeader";
