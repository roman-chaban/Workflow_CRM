import type { Metadata } from 'next';
import '@/styles/fonts/_fonts.scss';
import '@/styles/main/main.scss';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export const metadata: Metadata = {
  title: 'Workflow CRM',
  description: '',
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
        {children}
      </body>
    </html>
  );
}
