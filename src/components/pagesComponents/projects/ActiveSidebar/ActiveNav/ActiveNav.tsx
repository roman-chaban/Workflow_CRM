import type { FC } from 'react';

import styles from '../ActiveSidebar.module.scss';
import { activeNavItems } from '../activeNavItems/activeNavItems';
import Link from 'next/link';

export const ActiveNav: FC = () => {
  return (
    <nav className={styles['active__nav']}>
      <ul className={styles['active__nav-list']}>
        {activeNavItems.map((item) => (
          <li key={item.id} className={styles['active__nav-list--item']}>
            <Link href={item.href} className={styles['active__nav-list--link']}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
