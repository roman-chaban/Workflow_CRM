'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/pages/Nearest.module.scss';
import { TEventsItems, EventItem } from '@/types/event-item';
import { useFetch } from '@/hooks/useFetch';
import {
  NearestHeader,
  NearestEventsList,
  EventModal,
} from '@/components/index/index';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function Nearest() {
  const { data: fetchedData } = useFetch<TEventsItems>({
    url: '/data/nearest-events.json',
  });
  const [events, setEvents] = useState<TEventsItems | []>([]);
  const [showModal, setShowModal] = useState(false);
  useDocumentTitle('Workflow CRM | Events');

  useEffect(() => {
    if (fetchedData) {
      setEvents(fetchedData);
    }
  }, [fetchedData]);

  const addNewEvent = (eventData: {
    title: string;
    duration: string;
    colorVariant: string;
  }) => {
    const newEvent: EventItem = {
      id: events.length + 1,
      title: eventData.title,
      icon: '/icons/nearest/arrow-up.svg',
      titleIcon: '/icons/nearest/events/active.svg',
      day: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      hour:
        new Date().toLocaleTimeString('uk-UA', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        }) + 'PM',
      duration: eventData.duration,
      colorVariant: eventData.colorVariant,
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <section className={styles['nearest']}>
      <NearestHeader onAddEvent={() => setShowModal(true)} />
      <NearestEventsList events={events} />
      {showModal && (
        <EventModal onClose={() => setShowModal(false)} onSave={addNewEvent} />
      )}
    </section>
  );
}
