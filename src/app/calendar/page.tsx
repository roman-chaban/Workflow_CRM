import { CalendarActive } from '@/components/CalendarActive/CalendarActive';
import { CalendarNav } from '@/components/CalendarNav/CalendarNav';
import { Grid } from '@/components/index';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workflow Crm | Calendar',
};

export default function Calendar() {
  return (
    <Grid tag="section" gridTemplateRows="auto" gap={'28px'}>
      <CalendarNav />
      <CalendarActive />
    </Grid>
  );
}
