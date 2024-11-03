import type { FC } from "react";

import { foldersData } from "@/data/folders";
import { InfoPortalFolder } from "@/components/InfoProtalElements/InfoPortalFolder/InfoPortalFolder";

import styles from "../InfoPortalFolder/InfoPortalFolder.module.scss";

export const InfoPortalFolders: FC = () => {
  return (
    <div className={styles["infoPortalFolders"]}>
      {foldersData.map((folderItem) => (
        <InfoPortalFolder
          key={folderItem.id}
          title={folderItem.title}
          icon={folderItem.icon}
          pagesTitle={folderItem.pagesTitle}
          path={folderItem.path}
        />
      ))}
    </div>
  );
};
