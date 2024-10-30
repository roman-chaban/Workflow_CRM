"use client";

import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

import {
  NearestEventsList,
  NearestHeader,
  SectionWrapper,
  EventModal,
} from "@/components/index/index";

import styles from "@/styles/pages/Nearest.module.scss";

export default function Nearest() {
  useDocumentTitle("Workflow CRM | Events");
  const [isModal, setIsModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => {
    setIsModal(false);
  });

  return (
    <SectionWrapper className={styles["nearest"]}>
      <NearestHeader onOpenModalAction={() => setIsModal(true)} />
      <NearestEventsList />
      {isModal && (
        <EventModal
          ref={modalRef}
          onCloseModalAction={() => setIsModal(false)}
        />
      )}
    </SectionWrapper>
  );
}
