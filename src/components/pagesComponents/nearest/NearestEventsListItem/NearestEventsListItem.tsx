import type { FC } from 'react';
import styles from './NearestEventsListItem.module.scss';
import { EventItem } from '@/types/event-item';
import Image from 'next/image';

interface NearestEventsListItemProps {
  event: EventItem;
}

export const NearestEventsListItem: FC<NearestEventsListItemProps> = ({
  event,
}) => {
  return (
    <div
      id={event.colorVariant}
      className={`${styles['nearest__events-item']}`}
    >
      <div className={styles['nearest__events-header']}>
        <div className={styles['nearest__events-top']}>
          <Image
            src={event.titleIcon}
            alt={event.title}
            width={24}
            height={24}
          />
          <h4 className={styles['nearest__events-title']}>{event.title}</h4>
        </div>
        <data className={styles['nearest__events-date']}>
          {event.day} | {event.hour}
        </data>
      </div>
      <div className={styles['nearest__events-right']}>
        <Image src={event.icon} alt={event.title} width={24} height={24} />
        <div className={styles['event__date']}>
          <Image
            src="/icons/nearest/clock.svg"
            alt="Clock Icon"
            width={24}
            height={24}
          />
          {event.duration}
        </div>
      </div>
    </div>
  );
};
