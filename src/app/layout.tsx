import type { Metadata } from 'next';

import { ReactNode } from 'react';

import { Providers } from '@/store/providers/providers';

import '@/styles/fonts/_fonts.scss';

import { LayoutWrapper } from '@/components/containers/LayoutWrapper/LayoutWrapper';

export const metadata: Metadata = {
  applicationName: 'Workflow CRM',
  title: 'Workflow CRM | Dashboard',
  description:
    'Workflow CRM is a powerful Customer Relationship Management system...',
  icons: '/favicon/crm_logo.svg',
  authors: { name: 'Roman Chaban', url: '' },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
