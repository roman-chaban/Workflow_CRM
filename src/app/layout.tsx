import type { Metadata } from 'next';

import '@/styles/fonts/_fonts.scss';
import '@/styles/main/main.scss';

import { Header } from '@/components/index/index';

import { Providers } from '@/store/providers/providers';

import {
  ClientModalWrapper,
  PageWrapper,
  MainWrapper,
} from '@/components/index/index';

export const metadata: Metadata = {
  title: 'Workflow CRM | Dashboard',
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
        <Providers>
          <ClientModalWrapper />
          <PageWrapper className="page">
            <Header />
            <MainWrapper className="main">{children}</MainWrapper>
          </PageWrapper>
        </Providers>
      </body>
    </html>
  );
}
