'use client';

import { ChangeEvent, useState, type FC } from 'react';
import { useBurgerMenu } from '@/hooks/useBurgerMenu';
import useMediaQuery from '@/hooks/useMediaQuery';

import Image from 'next/image';
import Link from 'next/link';

import { PATHS } from '@/enums/paths';

import { Input, Button } from '@/components/index';
import { BurgerButton } from '@/components/ui/buttons/BurgerButton/BurgerButton';
import { BurgerMenu } from '../Burger/BurgerMenu/BurgerMenu';

import styles from './Header.module.scss';

const searchIcon = (
  <Image
    priority
    src="/icons/headerIcons/search.svg"
    alt="Search Icon"
    width={20}
    height={20}
  />
);

export const Header: FC = () => {
  const [search, setSearch] = useState<string>('');
  const isMatch = useMediaQuery('(max-width: 1024px)');
  const { isMenuOpen, openMenu, closeMenu } = useBurgerMenu();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

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
            onChange: handleSearchChange,
            type: 'search',
            value: search,
            placeholder: 'Search',
          }}
        />
        <div className={styles['header__account']}>
          <Button
            type="button"
            className={styles['header__notification-button']}
            ariaLabel="Notifications"
          >
            <Image
              priority
              src="/icons/headerIcons/notifications.svg"
              alt="Notification Icon"
              width={24}
              height={24}
            />
          </Button>
          <Button type={'button'} className={styles['signInButton']}>
            <Link href={PATHS.SIGN_IN}>
              <Image
                priority
                src="/icons/headerIcons/addmember.svg"
                alt="Notification Icon"
                width={24}
                height={24}
              />
            </Link>
          </Button>

          {isMatch && (
            <BurgerButton
              openMenu={openMenu}
              className={styles['burgerButton']}
            />
          )}
        </div>
      </div>

      {isMenuOpen && <BurgerMenu isOpen closeMenu={closeMenu} />}
    </header>
  );
};
