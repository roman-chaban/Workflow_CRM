import { Metadata } from 'next';

import { Box } from '@/components/containers/Box/Box';
import { SectionWrapper } from '@/components/containers/SectionWrapper/SectionWrapper';
import { DashboardInfo } from '@/components/DashboardInfo/DashboardInfo';
import { NearestEvents } from '@/components/NearestEvents/NearestEvents';
import { Workload } from '@/components/Workload/Workload';

import styles from '@/styles/pages/Home.module.scss';
import { Projects } from '@/components/Projects/Projects';

export const metadata: Metadata = {
  title: 'Workflow CRM | Dashboard',
};

export default function Home() {
  return (
    <SectionWrapper className={styles['home']}>
      <DashboardInfo />
      <Box className={styles['box']}>
        <Workload />
        <NearestEvents />
      </Box>
      <Box className={styles['box']}>
        <Projects />
      </Box>
    </SectionWrapper>
  );
}
