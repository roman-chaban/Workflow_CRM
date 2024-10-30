import type { FC } from "react";

import Image from "next/image";

import { Button } from "@/components/index/index";

import styles from "./FiltersBoardFooter.module.scss";

export const FiltersBoardFooter: FC = () => {
  return (
    <div className={styles["filtersBoardFooter"]}>
      <div className={styles["filtersBoardFooterContainer"]}>
        <div className={styles["filtersPointedBlock"]}>
          <Image
            src={"icons/dashboardIcons/pointed.svg"}
            width={24}
            height={24}
            alt={"Pointed Icon"}
          />
          <h4 className={styles["filtersPointedBlockTitle"]}>
            10 matches found
          </h4>
        </div>
        <Button type={"button"} className={styles['filtersSaveButton']} >Save Filters </Button>
      </div>
    </div>
  );
};
