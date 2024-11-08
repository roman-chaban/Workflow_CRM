import type { Metadata } from 'next';

import { Grid, CalendarActive } from '@/components/index';
import { NavigationBar } from '@/components/ui/NavigationBar/NavigationBar';

export const metadata: Metadata = {
  title: 'Workflow CRM | Calendar',
};

export default function Calendar() {
  return (
    <Grid tag="section" gridTemplateRows="auto" gap={'28px'}>
      <NavigationBar heading="Calendar" buttonLabel="Add Event" />
      <CalendarActive />
    </Grid>
  );
}
