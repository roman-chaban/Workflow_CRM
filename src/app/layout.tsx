'use client';


import '@/styles/fonts/_fonts.scss';
import '@/styles/main/main.scss';

// import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Header } from '@/components/Header/Header';
import { Modal } from '@/components/ui/Modal/Modal';
import { useState } from 'react';



// export const metadata: Metadata = {
//   title: 'Workflow CRM',
//   description:
//     'Workflow CRM is a powerful Customer Relationship Management system designed to streamline sales processes, enhance customer service, and facilitate project management. With a comprehensive suite of tools, this platform empowers businesses to manage contacts, track deals, organize tasks, and generate insightful reports, ultimately improving customer interactions and boosting operational efficiency.',
//   icons: '/favicon/crm_logo.svg',
// };

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
