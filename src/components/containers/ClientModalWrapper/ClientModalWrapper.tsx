'use client';

import { type FC, useRef, useState } from 'react';

import { Sidebar, Modal } from '@/components/index/index';
import { useClickOutside } from '@/hooks/useClickOutside';
import { usePathname } from 'next/navigation';

type IsOpenModal = boolean;
type ModalRef = HTMLDivElement;

export const ClientModalWrapper: FC = () => {
  const [isOpen, setIsOpen] = useState<IsOpenModal>(false);
  const pathname = usePathname();
  const modalRef = useRef<ModalRef>(null);
  useClickOutside(modalRef, () => setIsOpen(false));

  const isSignInPage = pathname === '/auth/signIn';
  const handleToggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

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
