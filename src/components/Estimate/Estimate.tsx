import { FC, useState } from 'react';

import styles from './Estimate.module.scss';

import { Input } from '../index';

import Image from 'next/image';

export const Estimate: FC = () => {
  const [duration, setDuration] = useState<string>('');
  return (
    <div className={styles['estimate']}>
      <div className={styles['estimate__container']}>
        <Input
          classNames={{
            input: styles['estimate__input'],
            label: styles['estimate__label'],
            labelText: styles['estimate__text'],
          }}
          properties={{
            htmlFor: 'duration',
            id: 'duration',
            name: 'duration',
            onChange: (event) => setDuration(event.target.value),
            value: duration,
            className: '',
            type: 'text',
            label: 'Estimate',
            placeholder: 'Select duration',
          }}
          inputIcon={
            <Image
              src={'/icons/activeIcons/clock.svg'}
              alt="Clock Icon"
              width={24}
              height={24}
              className={styles['clock__icon']}
            />
          }
        />
      </div>
    </div>
  );
};
