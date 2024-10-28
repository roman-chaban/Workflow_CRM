"use client";

import { type ForwardedRef, forwardRef } from "react";

import { EventModalHeader } from "@/components/pagesComponents/nearest/EventModal/EventModalHeader/EventModalHeader";

import styles from "./EventModal.module.scss";
import { EventModalForm } from "../EventModalForm/EventModalForm";

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
