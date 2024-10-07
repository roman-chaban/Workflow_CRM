import type { FC } from 'react';
import styles from '../TasksNav.module.scss';
import Image from 'next/image';
import { Button } from '@/components/index';

interface MenuItem {
  id: string;
  icon: string;
  activeIcon: string;
}

export const MenuButton: FC<{
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
}> = ({ item, isActive, onClick }) => (
  <Button
    type="button"
    className={`${styles['menu__button']} ${isActive ? styles['active'] : ''}`}
    onClick={onClick}
  >
    <Image
      alt="Item Icon"
      src={isActive ? item.activeIcon : item.icon}
      width={24}
      height={24}
      className={styles['menu__icon']}
    />
  </Button>
);
