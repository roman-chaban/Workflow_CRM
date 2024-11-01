import type { FC } from "react";

import Image from "next/image";

import { Heading } from "@/components/ui/Heading/Heading";

import styles from "./InfoPortalFolder.module.scss";

export interface InfoPortalFolderProps {
  icon: string;
  title: string;
  pagesTitle: string;
}

export const InfoPortalFolder: FC<InfoPortalFolderProps> = ({
  icon,
  title,
  pagesTitle,
}) => {
  return (
    <div className={styles["infoPortalFolder"]}>
      <div className={styles["infoPortalFolderContainer"]}>
        <Image
          src={icon}
          alt={title}
          width={44}
          height={44}
          className={styles["infoPortalFolderIcon"]}
        />
        <div className={styles["infoPortalFolderTitles"]}>
          <Heading level={"h5"} className={styles["infoPortalFolderTitle"]}>
            {title}
          </Heading>
          <span className={styles["infoPortalFolderSubtitle"]}>
            {pagesTitle}
          </span>
        </div>
      </div>
    </div>
  );
};
