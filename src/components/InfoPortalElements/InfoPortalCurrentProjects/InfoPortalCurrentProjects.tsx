import type { FC } from "react";

import Image from "next/image";

import styles from "../InfoPortalBanner/InfoPortalBanner.module.scss";

export const InfoPortalCurrentProjects: FC = () => {
  return (
    <div className={styles["infoPortalCurrentProjects"]}>
      <div className={styles["infoPortalCurrentProjectsContainer"]}>
        <h5 className={styles["currentProjectsTitle"]}>Current Projects</h5>
        <div className={styles["currentProjectsInfo"]}>
          <div className={styles["currentProjectsSubInfo"]}>
            <strong className={styles["currentProjectsSubInfoNumber"]}>
              10
            </strong>
            <span className={styles["currentProjectsSubInfoTitle"]}>
              Growth +3
            </span>
          </div>
          <Image
            src={"/images/info-portal/icons/statistics.svg"}
            className={styles["statisticsIcon"]}
            alt={"Statistics Icon"}
            width={102}
            height={67.55}
          />
        </div>
        <span className={styles["OngoingTitle"]}>
          Ongoing projects last month - 7
        </span>
      </div>
    </div>
  );
};
