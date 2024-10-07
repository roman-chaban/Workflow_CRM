'use client';

import '@/styles/fonts/_fonts.scss';
import '@/styles/main/main.scss';

import { Sidebar, Header, Modal } from '@/components/index/index';

import { useState } from 'react';
import { Providers } from '@/store/providers/providers';

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
        <Providers>
          <Sidebar onOpenModal={handleOpenModal} />
          {isOpen && <Modal onClose={handleCloseModal} />}
          <div className="page">
            <Header />
            <main className="main">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
