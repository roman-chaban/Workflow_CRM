import type { Metadata } from 'next';

import {
  Box,
  SectionWrapper,
  DashboardInfo,
  NearestEvents,
  Workload,
  Projects,
  ActivityStream,
} from '@/components/index/index';

import styles from '@/styles/pages/Home.module.scss';

export const metadata: Metadata = {
  applicationName: 'Workflow CRM',
  title: 'Workflow CRM | Home',
  description:
    'Workflow CRM is a powerful Customer Relationship Management system...',
  icons: '/favicon/crm_logo.svg',
  authors: { name: 'Roman Chaban', url: '' },
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
        <ActivityStream />
      </Box>
    </SectionWrapper>
  );
}
