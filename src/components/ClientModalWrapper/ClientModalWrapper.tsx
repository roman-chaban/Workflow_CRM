'use client';

import { type FC, useRef, useState } from 'react';

import { Sidebar, Modal } from '@/components/index/index';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

export const ClientModalWrapper: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleToggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  useOnClickOutside(modalRef, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <>
      <Sidebar onOpenModal={handleToggleModal} />
      {isOpen && <Modal onClose={handleToggleModal} ref={modalRef} />}
    </>
  );
};
