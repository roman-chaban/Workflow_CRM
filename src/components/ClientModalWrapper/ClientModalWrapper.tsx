"use client";

import { type FC, useRef, useState } from "react";

import { Sidebar, Modal } from "@/components/index/index";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { usePathname } from "next/navigation";

type IsOpenModal = boolean;
type ModalRef = HTMLDivElement;

export const ClientModalWrapper: FC = () => {
  const [isOpen, setIsOpen] = useState<IsOpenModal>(false);
  const modalRef = useRef<ModalRef>(null);
  const pathname = usePathname();
  const isSignInPage = pathname === "/auth/signIn";
  const handleToggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  useOnClickOutside(modalRef, () => setIsOpen(false));

  return (
    <>
      {!isSignInPage && (
        <>
          <Sidebar onOpenModal={handleToggleModal} />
          {isOpen && <Modal onClose={handleToggleModal} ref={modalRef} />}
        </>
      )}
    </>
  );
};
