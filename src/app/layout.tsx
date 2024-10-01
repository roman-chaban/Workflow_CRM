import type { Metadata } from 'next';
import '@/styles/fonts/_fonts.scss';
import '@/styles/main/main.scss';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Header } from '@/components/Header/Header';

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
        <div className='page'>
          <Header />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
