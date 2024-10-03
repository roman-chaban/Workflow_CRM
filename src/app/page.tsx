import type { Metadata } from 'next';

import { Box } from '@/components/containers/Box/Box';
import { SectionWrapper } from '@/components/containers/SectionWrapper/SectionWrapper';
import { DashboardInfo } from '@/components/DashboardInfo/DashboardInfo';
import { NearestEvents } from '@/components/NearestEvents/NearestEvents';
import { Workload } from '@/components/Workload/Workload';

import styles from '@/styles/pages/Home.module.scss';
import { Projects } from '@/components/Projects/Projects';

export const metadata: Metadata = {
  title: 'Workflow CRM | Dashboard',
  description:
    'Workflow CRM is a powerful Customer Relationship Management system designed to streamline sales processes, enhance customer service, and facilitate project management. With a comprehensive suite of tools, this platform empowers businesses to manage contacts, track deals, organize tasks, and generate insightful reports, ultimately improving customer interactions and boosting operational efficiency.',
  icons: '/favicon/crm_logo.svg',
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
