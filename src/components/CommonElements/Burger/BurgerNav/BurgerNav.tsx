import { type FC, memo } from 'react';

import Link from 'next/link';

import { nav } from '@/types/nav';

import styles from '../BurgerMenu/BurgerMenu.module.scss';

interface BurgerNavProps {
  onClose: () => void;
}

export const BurgerNav: FC<BurgerNavProps> = memo(({ onClose }) => {
  return (
    <ul className={styles['burgerMenu']}>
      {nav.map((item) => (
        <li
          key={item.id}
          className={styles['burgerMenuItem']}
          onClick={onClose}
        >
          <Link href={item.href} className={styles['burgerMenuLink']}>
            {item.children}
          </Link>
        </li>
      ))}
    </ul>
  );
});

BurgerNav.displayName = 'Burger Nav';
