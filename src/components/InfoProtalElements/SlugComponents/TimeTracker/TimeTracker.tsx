'use client';

import type { FC } from "react";

import { Grid } from "@/components/containers/Grid/Grid";
import { TimeTrackerNav } from "@/components/InfoProtalElements/SlugComponents/TimeTracker/TimeTrackerNav/TimeTrackerNav";
import { TimeTrackerSidebar } from "@/components/InfoProtalElements/SlugComponents/TimeTracker/TimeTrackerSidebar/TimeTrackerSidebar";

export const TimeTracker: FC = () => {
  return (
    <Grid tag={"section"} gap={"28px"}>
      <TimeTrackerNav />
      <TimeTrackerSidebar />
    </Grid>
  );
};
