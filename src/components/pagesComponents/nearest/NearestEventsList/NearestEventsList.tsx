'use client';

import type { FC } from 'react';
import styles from './NearestEventsList.module.scss';
import { useFetch } from '@/hooks/useFetch';
import { NearestEventsListItem } from '../NearestEventsListItem/NearestEventsListItem';
import { TEventsItems } from '@/types/event-item';

export const NearestEventsList: FC = () => {
  const { data } = useFetch<TEventsItems>({ url: '/data/nearest-events.json' });

  return (
    <ul className={styles['nearest__events']}>
      {data?.map((event) => (
        <NearestEventsListItem key={event.id} event={event} />
      ))}
    </ul>
  );
};
