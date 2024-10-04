'use client';

import '@/styles/fonts/_fonts.scss';
import '@/styles/main/main.scss';

import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Header } from '@/components/Header/Header';
import { Modal } from '@/components/ui/Modal/Modal';
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/favicon/crm_logo.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        <Sidebar onOpenModal={handleOpenModal} />
        {isOpen && <Modal onClose={handleCloseModal} />}
        <div className="page">
          <Header />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
