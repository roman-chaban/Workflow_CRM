"use client";

import styles from "@/styles/pages/Nearest.module.scss";
import { NearestEventsList } from "@/components/pagesComponents/nearest/NearestEventsList/NearestEventsList";
import { NearestHeader } from "@/components/pagesComponents/nearest/NearestHeader/NearestHeader";
import { SectionWrapper } from "@/components/containers/SectionWrapper/SectionWrapper";
import { useRef, useState } from "react";
import { EventModal } from "@/components/pagesComponents/nearest/EventModal/EventModal";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export default function Nearest() {
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
