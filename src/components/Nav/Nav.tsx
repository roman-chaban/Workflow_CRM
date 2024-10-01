import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { NavItem } from '@/types/nav';

import styles from './Nav.module.scss';

interface NavProps {
  nav: Array<NavItem>;
}

export const Nav: FC<NavProps> = ({ nav }) => {
  return (
    <nav className={styles['nav']}>
      <ul className={styles['nav__menu']}>
        {nav.map((item: NavItem) => (
          <li key={item.id} className={styles['nav__menu-item']}>
            <Image
              src={item.icon}
              alt={item.href}
              width={24}
              height={24}
              className={styles['nav__menu-icon']}
            />
            <Link href={item.href} className={styles['nav__menu-link']}>
              {item.children}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
