"use client";

import { type ForwardedRef, forwardRef } from "react";

import { EventModalHeader, EventModalForm } from "@/components/index/index";

import styles from "./EventModal.module.scss";

interface EventModalProps {
  onCloseModalAction: () => void;
}

export const EventModal = forwardRef<HTMLDivElement, EventModalProps>(
  ({ onCloseModalAction }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles["modal"]}>
        <div ref={ref} className={styles["modal__container"]}>
          <EventModalHeader onCloseModal={onCloseModalAction} />
          <EventModalForm />
        </div>
      </div>
    );
  },
);

EventModal.displayName = "EventModal";
