import type { Metadata } from "next";
import "@/styles/fonts/_fonts.scss";
import "@/styles/main/main.scss";
import { Grid } from "@/components/index/index";
import { Providers } from "@/store/providers/providers";
import {
  ClientModalWrapper,
  PageWrapper,
  MainWrapper,
} from "@/components/index/index";
import React from "react";
import { GlobalWrapper } from "@/components/containers/GlobalWrapper/GlobalWrapper";
import { IsHeaderRender } from "@/components/IsHeaderRender/IsHeaderRender";

export const metadata: Metadata = {
  title: "Workflow CRM | Dashboard",
  description:
    "Workflow CRM is a powerful Customer Relationship Management system...",
  icons: "/favicon/crm_logo.svg",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
