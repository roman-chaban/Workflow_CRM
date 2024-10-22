import type {Metadata} from 'next';
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
    title: 'Workflow CRM | Dashboard',
};

export default function Home() {
    return (
        <SectionWrapper className={styles['home']}>
            <DashboardInfo/>
            <Box className={styles['box']}>
                <Workload/>
                <NearestEvents/>
            </Box>
            <Box className={styles['box']}>
                <Projects/>
                <ActivityStream/>
            </Box>
        </SectionWrapper>
    );
}
