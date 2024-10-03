import type { Metadata } from 'next';

import styles from '@/styles/pages/Nearest.module.scss';
import { NearestHeader } from '@/components/pagesComponents/nearest/NearestHeader/NearestHeader';
import { NearestEventsList } from '@/components/pagesComponents/nearest/NearestEventsList/NearestEventsList';

export const metadata: Metadata = {
  title: 'Workflow CRM | Nearest',
};

export default function Nearest() {
  return (
    <section className={styles['nearest']}>
      <NearestHeader />
      <NearestEventsList />
    </section>
  );
}
