import type { Metadata } from "next";

import { Grid, CalendarActive, CalendarNav } from "@/components/index";

export const metadata: Metadata = {
  title: "Workflow CRM | Calendar",
};

export default function Calendar() {
  return (
    <Grid tag="section" gridTemplateRows="auto" gap={"28px"}>
      <CalendarNav />
      <CalendarActive />
    </Grid>
  );
}
