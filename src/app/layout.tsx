import type { Metadata } from "next";

import { ReactNode } from "react";

import { Providers } from "@/store/providers/providers";

import { Grid } from "@/components/index/index";
import {
  ClientModalWrapper,
  PageWrapper,
  MainWrapper,
  IsHeaderRender,
  GlobalWrapper,
} from "@/components/index/index";

import "@/styles/fonts/_fonts.scss";
import "@/styles/main/main.scss";

export const metadata: Metadata = {
  title: "Workflow CRM | Dashboard",
  description:
    "Workflow CRM is a powerful Customer Relationship Management system...",
  icons: "/favicon/crm_logo.svg",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Grid>
            <GlobalWrapper>
              <ClientModalWrapper />
              <PageWrapper>
                <IsHeaderRender />
                <MainWrapper className="main">{children}</MainWrapper>
              </PageWrapper>
            </GlobalWrapper>
          </Grid>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
