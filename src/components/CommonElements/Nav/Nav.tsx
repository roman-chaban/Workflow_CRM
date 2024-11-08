'use client';

import { FC } from 'react';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import { NavItem } from '@/types/nav';

import styles from './Nav.module.scss';

interface NavProps {
  nav: Array<NavItem>;
}

export const Nav: FC<NavProps> = ({ nav }) => {
  const pathname = usePathname();

  return (
    <nav className={styles['nav']}>
      <ul className={styles['nav__menu']}>
        {nav.map((item: NavItem) => {
          const isActive =
            pathname === item.href ||
            (pathname === '/nearest' && item.href === '/');

          return (
            <li
              key={item.id}
              className={`${styles['nav__menu-item']} ${
                isActive ? styles['nav__menu-item--active'] : ''
              }`}
            >
              <Image
                src={isActive ? item.activeIcon : item.icon}
                alt={item.href}
                width={24}
                height={24}
                className={styles['nav__menu-icon']}
              />
              <Link
                title={item.children}
                href={item.href}
                className={`${styles['nav__menu-link']} ${
                  isActive ? styles['nav__menu-item--activeLink'] : ''
                }`}
              >
                {item.children}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
