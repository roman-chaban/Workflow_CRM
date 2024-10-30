import type { Metadata } from "next";

import { CalendarActive } from "@/components/CalendarElements/CalendarActive/CalendarActive";
import { CalendarNav } from "@/components/CalendarElements/CalendarNav/CalendarNav";
import { Grid } from "@/components/index";

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
