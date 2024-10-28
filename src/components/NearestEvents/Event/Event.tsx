import type { FC } from "react";
import { Event as CurrentEvent } from "@/types/events";
import Image from "next/image";

import styles from "./Event.module.scss";

interface EventProps {
  event: CurrentEvent;
}

export const Event: FC<EventProps> = ({ event }) => {
  const variantClass = event.title.startsWith("P")
    ? styles["event__variant-primary"]
    : styles["event__variant-secondary"];
  return (
    <div className={`${styles.event} ${variantClass}`}>
      <div className={styles["event__container"]}>
        <div className={styles["event__info"]}>
          <h3 className={styles["event__title"]}>{event.title}</h3>
          <div className={styles["event__subInfo"]}>
            {event.day} | {event.hour}
          </div>
        </div>
        <div className={styles["event__additionalInfo"]}>
          {event.title.startsWith("P") ? (
            <Image
              src="/icons/nearest/arrow-up.svg"
              alt="Arrow Up"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/icons/nearest/arrow-down.svg"
              alt="Arrow Down"
              width={24}
              height={24}
            />
          )}
          <div className={styles["event__date"]}>
            <Image
              src="/icons/nearest/clock.svg"
              alt="Clock Icon"
              width={24}
              height={24}
            />
            {event.duration}
          </div>
        </div>
      </div>
    </div>
  );
};
