'use client';

import { type FC } from 'react';
import styles from './NearestEventsList.module.scss';
import { NearestEventsListItem } from '../NearestEventsListItem/NearestEventsListItem';
import { TEvents } from '@/types/events';

interface NearestEventsListProps {
  events: TEvents;
}

export const NearestEventsList: FC<NearestEventsListProps> = ({ events }) => {
  return (
    <ul className={styles['nearest__events']}>
      {events?.map((event) => (
        <NearestEventsListItem key={event.id} event={event} />
      ))}
    </ul>
  );
};
