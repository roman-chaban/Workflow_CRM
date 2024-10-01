'use client';

import { useState, type FC } from 'react';
import styles from './Header.module.scss';
import { Input } from '../ui/Input/Input';
import Image from 'next/image';
import { Button } from '../ui/Button/Button';

export const Header: FC = () => {
  const searchIcon = (
    <Image
      priority
      src="/icons/headerIcons/search.svg"
      alt="Search Icon"
      width={20}
      height={20}
    />
  );
  const [search, setSearch] = useState<string>('');
  return (
    <header className={styles['header']}>
      <div className={styles['header__container']}>
        <Input
          inputIcon={searchIcon}
          classNames={{
            input: styles['header__search-input'],
            label: styles['header__search-label'],
            labelText: '',
          }}
          properties={{
            htmlFor: 'search',
            id: 'search',
            name: 'search',
            onChange: (event) => setSearch(event.target.value),
            type: 'search',
            value: search,
            placeholder: 'Search',
          }}
        />
        <div className={styles['header__account']}>
          <Button
            type="button"
            className={styles['header__notification-button']}
          >
            <Image
              priority
              src="/icons/headerIcons/notifications.svg"
              alt="Notification Icon"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </header>
  );
};
