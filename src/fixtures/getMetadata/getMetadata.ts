import { Metadata } from "next";

import { SLUG_PATHS } from "@/enums/slug-paths";

import { TITLES } from "@/enums/titles";

export const getMetadata = (slugPath: string): Metadata => {
  switch (slugPath) {
    case SLUG_PATHS.TIME_TRACKER:
      return {
        title: TITLES.TIME_TRACKER,
      };
    case SLUG_PATHS.MEDICAL_APP:
      return {
        title: TITLES.MEDICAL_APP,
      };
    default:
      return {
        title: "Workflow CRM | Info Portal",
      };
  }
};
