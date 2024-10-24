'use client';

import { FC, RefObject, useState } from 'react';
import styles from './EventModal.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { CloudUpload, FormClose } from 'grommet-icons';

interface EventModalProps {
  onClose: () => void;
  onSave: (eventData: {
    title: string;
    duration: string;
    colorVariant: string;
  }) => void;
  eventModalRef: RefObject<HTMLDivElement>;
}

export const EventModal: FC<EventModalProps> = ({
  onClose,
  onSave,
  eventModalRef,
}) => {
  const [data, setData] = useState({
    title: '',
    duration: '',
    colorVariant: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    if (data.title && data.duration && data.colorVariant) {
      onSave(data);
      onClose();
    }
  };

  const isButtonDisabled = !data.title || !data.duration || !data.colorVariant;

  return (
    <div className={styles['modal']}>
      <div ref={eventModalRef} className={styles['modal__container']}>
        <h2 className={styles['modal__title']}>Add New Event</h2>
        <div className={styles['modal__fields']}>
          <label className={styles['modal__field']}>
            Title:
            <input
              className={styles['modal__field-input']}
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles['modal__field']}>
            Duration:
            <input
              className={styles['modal__field-input']}
              type="text"
              name="duration"
              value={data.duration}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles['modal__field']}>
            Color Variant:
            <input
              className={styles['modal__field-area']}
              name="colorVariant"
              value={data.colorVariant}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles['modal__actions']}>
          <Button
            type="button"
            onClick={onClose}
            className={styles['modal__cancel']}
          >
            Cancel
            <FormClose color="white" />
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className={`${styles['modal__save']} ${
              isButtonDisabled ? styles['modal__inactive'] : ''
            }`}
            disabled={isButtonDisabled}
          >
            Save
            <CloudUpload color="white" style={{ width: 20, height: 20 }} />
          </Button>
        </div>
      </div>
    </div>
  );
};
