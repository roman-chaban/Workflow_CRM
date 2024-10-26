import type { Metadata } from 'next';

import '@/styles/fonts/_fonts.scss';
import '@/styles/main/main.scss';

import { Grid, Header } from '@/components/index/index';

import { Providers } from '@/store/providers/providers';

import {
  ClientModalWrapper,
  PageWrapper,
  MainWrapper,
} from '@/components/index/index';

import React from 'react';
import { GlobalWrapper } from '@/components/containers/GlobalWrapper/GlobalWrapper';

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
          <Grid tag="div">
            <GlobalWrapper>
              <ClientModalWrapper />
              <PageWrapper className="page">
                <Header />
                <MainWrapper className="main">{children}</MainWrapper>
              </PageWrapper>
            </GlobalWrapper>
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
