import type { FC } from "react";

import { Button, Heading, Plus } from "@/components/index/index";

import styles from "./InfoPortalHeader.module.scss";

export const InfoPortalHeader: FC = () => {
  return (
    <div className={styles["infoPortalHeader"]}>
      <Heading level={"h1"} className={styles["infoPortalHeaderHeading"]}>
        Info Portal
      </Heading>
      <Button type={"button"} className={styles["infoPortalHeaderButton"]}>
        <Plus color={"white"} /> Add Folder
      </Button>
    </div>
  );
};
