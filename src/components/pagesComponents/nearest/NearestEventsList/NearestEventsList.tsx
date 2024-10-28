"use client";

import { type FC, useEffect } from "react";
import styles from "./NearestEventsList.module.scss";
import { NearestEventsListItem } from "../NearestEventsListItem/NearestEventsListItem";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { fetchEvents } from "@/store/slices/EventsSlice";
import { EventItem } from "@/types/event-item";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";

export const NearestEventsList: FC = () => {
  const dispatch = useAppDispatch();
  const { events, loading, error } = useAppSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading === "fulfilled")
    return (
      <ul className={styles["nearest__events"]}>
        <LoadingSpinner />
      </ul>
    );
  if (error) return <div>Error</div>;

  return (
    <ul className={styles["nearest__events"]}>
      {events.map((event: EventItem) => (
        <NearestEventsListItem key={event.id} event={event} />
      ))}
    </ul>
  );
};
