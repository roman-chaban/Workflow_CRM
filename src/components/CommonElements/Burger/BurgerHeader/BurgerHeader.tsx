import { type FC, memo } from 'react';

import Image from 'next/image';

import { Button, Close } from '@/components/index';

import styles from '../BurgerMenu/BurgerMenu.module.scss';

interface BurgerHeaderProps {
  closeMenu: () => void;
}

export const BurgerHeader: FC<BurgerHeaderProps> = memo(({ closeMenu }) => {
  return (
    <div className={styles['burgerHeader']}>
      <div className={styles['burgerHeaderLogo']}>
        <Image
          priority
          src="/icons/logo/Logo.svg"
          alt="Sidebar Logo"
          width={45}
          height={45}
          className={styles['workflow__logo']}
        />
        <h2 className={styles['workflowTitle']}>Workflow CRM</h2>
      </div>
      <Button
        title="Close"
        type="button"
        className={styles['burgerClose']}
        onClick={closeMenu}
      >
        <Close />
      </Button>
    </div>
  );
});

BurgerHeader.displayName = 'Burger Header';
