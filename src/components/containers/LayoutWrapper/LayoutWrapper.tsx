import { FC, ReactNode } from 'react';

import {
  ClientModalWrapper,
  PageWrapper,
  MainWrapper,
  IsHeaderRender,
  GlobalWrapper,
} from '@/components/index/index';

import '@/styles/main/main.scss';

export const LayoutWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <GlobalWrapper>
      <ClientModalWrapper />
      <PageWrapper>
        <IsHeaderRender />
        <MainWrapper className="main">{children}</MainWrapper>
      </PageWrapper>
    </GlobalWrapper>
  );
};
