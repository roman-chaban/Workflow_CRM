import type { FC } from "react";

import { Event } from "@/components/NearestEvents/Event/Event";

import { Event as CurrentEvent } from "@/types/events";

import styles from "./Events.module.scss";

interface EventsProps {
  events: CurrentEvent[];
}

export const Events: FC<EventsProps> = ({ events }) => {
  return (
    <div className={styles["events"]}>
      {events.map((event: CurrentEvent) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};
