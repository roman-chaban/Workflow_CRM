import type { FC } from 'react';
import { Event as CurrentEvent, TEvents } from '@/types/events';
import { Event } from '../Event/Event';

import styles from './Events.module.scss';

interface EventsProps {
  events: TEvents;
}

export const Events: FC<EventsProps> = ({ events }) => {
  return (
    <div className={styles['events']}>
      {events.map((event: CurrentEvent) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};
