import '@/styles/fonts/_fonts.scss';
import '@/styles/main/main.scss';

import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Header } from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Workflow CRM',
  description:
    'Workflow CRM is a powerful Customer Relationship Management system designed to streamline sales processes, enhance customer service, and facilitate project management. With a comprehensive suite of tools, this platform empowers businesses to manage contacts, track deals, organize tasks, and generate insightful reports, ultimately improving customer interactions and boosting operational efficiency.',
  icons: '/favicon/crm_logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div className="page">
          <Header />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
