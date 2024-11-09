import { FC, memo, useEffect, useRef } from 'react';

import { BurgerNav } from '../BurgerNav/BurgerNav';
import { BurgerHeader } from '../BurgerHeader/BurgerHeader';

import styles from './BurgerMenu.module.scss';
import { burgerAnimation } from '@/animations/burger/burger';

interface BurgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = memo(({ isOpen, closeMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      burgerAnimation(isOpen, menuRef.current);
    }
  }, [isOpen]);

  return (
    <>
      <div ref={menuRef} className={styles['burger']}>
        <BurgerHeader closeMenu={closeMenu} />

        <div className={styles['burgerContainer']}>
          <BurgerNav onClose={closeMenu} />
        </div>
      </div>
    </>
  );
});

BurgerMenu.displayName = 'Burger Menu';
