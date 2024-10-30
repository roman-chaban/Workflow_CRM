"use client";

import type { FC } from "react";
import { useFetch } from "@/hooks/useFetch";

import Image from "next/image";
import Link from "next/link";

import { Events } from "@/components/CommonElements/NearestEvents/Events/Events";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";

import { Events as CurrentEvents } from "@/types/events";
import { PATHS } from "@/constants/paths";

import styles from "./NearestEvents.module.scss";

export const NearestEvents: FC = () => {
  const { data: events, loading } = useFetch<CurrentEvents>({
    url: "data/nearest-events.json",
  });

  if (loading) return <LoadingSpinner />;

  return (
    <div className={styles["nearest"]}>
      <div className={styles["nearest__container"]}>
        <div className={styles["nearest__header"]}>
          <h3 className={styles["nearest__header-title"]}>Nearest Events</h3>
          <Link href={PATHS.NEAREST} className={styles["nearest__header-link"]}>
            View all{" "}
            <Image
              src="/icons/workload/arrow-right.svg"
              alt="Arrow Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
        {events && Array.isArray(events) && <Events events={events} />}
      </div>
    </div>
  );
};
