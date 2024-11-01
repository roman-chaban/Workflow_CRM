import { Grid } from "@/components/containers/Grid/Grid";

import { Metadata } from "next";

import { InfoPortalHeader } from "@/components/InfoProtalElements/InfoPortalHeader/InfoPortalHeader";
import { InfoPortalBanner } from "@/components/InfoProtalElements/InfoPortalBanner/InfoPortalBanner";
import { InfoPortalFolders } from "@/components/InfoProtalElements/InfoPortalFolders/InfoPortalFolders";
import { InfoPortalCurrentProjects } from "@/components/InfoProtalElements/InfoPortalCurrentProjects/InfoPortalCurrentProjects";
import { Box } from "@/components/containers/Box/Box";

export const metadata: Metadata = {
  title: "Workflow CRM | Info-Portal",
};

export default function InfoPortal() {
  return (
    <Grid gap={"30px"} tag={"section"}>
      <InfoPortalHeader />
      <Box
        style={{
          width: "100%",
          gridColumn: "span 12",
          display: "flex",
          gap: "30px",
        }}
      >
        <InfoPortalBanner
          title={"Your project data warehouse"}
          subtitle={
            "Add project data, create thematic pages, edit data, share information with team members"
          }
          bannerImageProps={{
            bannerImage: "/images/info-portal/illustration.svg",
            altText: "Illustration Banner Image",
            width: 291,
            height: 278,
          }}
        />
        <InfoPortalCurrentProjects />
      </Box>
      <InfoPortalFolders />
    </Grid>
  );
}
