import type { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { PATHS } from "@/enums/paths";

import { Button } from "@/components/index/index";

import styles from "./NearestHeader.module.scss";

interface NearestHeaderProps {
  onOpenModalAction: () => void;
}

export const NearestHeader: FC<NearestHeaderProps> = ({
  onOpenModalAction,
}) => {
  return (
    <nav className={styles["nearest__header"]}>
      <div className={styles["nearest__header-top"]}>
        <Link href={PATHS.HOME} className={styles["nearest__header-back"]}>
          <Image
            src="/icons/nearest/arrow-back.svg"
            alt="Arrow Back Icon"
            width={24}
            height={24}
          />{" "}
          Back to Dashboard
        </Link>
        <h2 className={styles["nearestHeaderTitle"]}>Nearest Events</h2>
      </div>
      <Button
        type="button"
        className={styles["nearestHeaderAddButton"]}
        onClick={onOpenModalAction}
      >
        <Image
          priority
          src="/icons/nearest/plus.svg"
          alt="Plus Icon"
          width={24}
          height={24}
        />
        Add Event
      </Button>
    </nav>
  );
};
