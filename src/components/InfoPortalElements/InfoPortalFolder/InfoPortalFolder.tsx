import type { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components/ui/Heading/Heading";

import styles from "./InfoPortalFolder.module.scss";

export interface InfoPortalFolderProps {
  icon: string;
  title: string;
  pagesTitle: string;
  path: string;
}

export const InfoPortalFolder: FC<InfoPortalFolderProps> = ({
  icon,
  title,
  pagesTitle,
  path,
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
          <Link href={path} className={styles["infoPortalFolderTitle"]}>
            <Heading level={"h5"}>{title}</Heading>
          </Link>
          <span className={styles["infoPortalFolderSubtitle"]}>
            {pagesTitle}
          </span>
        </div>
      </div>
    </div>
  );
};
