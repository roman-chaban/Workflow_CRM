'use client';

import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useFetch } from '@/hooks/useFetch';

import { Events } from './Events/Events';
import { TEvents } from '@/types/events';

import styles from './NearestEvents.module.scss';
import { PATHS } from '@/constants/paths';

export const NearestEvents: FC = () => {
  const { data, loading, error } = useFetch<TEvents>({
    url: '/data/events.json',
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className={styles['nearest']}>
      <div className={styles['nearest__container']}>
        <div className={styles['nearest__header']}>
          <h3 className={styles['nearest__header-title']}>Nearest Events</h3>
          <Link href={PATHS.NEAREST} className={styles['nearest__header-link']}>
            View all{' '}
            <Image
              src="/icons/workload/arrow-right.svg"
              alt="Arrow Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
        {data && Array.isArray(data) && <Events events={data} />}
      </div>
    </div>
  );
};
