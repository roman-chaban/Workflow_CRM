import type { Metadata } from 'next';

import styles from '@/styles/pages/Nearest.module.scss';

export const metadata: Metadata = {
  title: 'Workflow CRM | Nearest',
};

export default function Nearest() {
  return <section className={styles['nearest']}>Nearest</section>;
}
