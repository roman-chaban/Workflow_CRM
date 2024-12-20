import { memo, type FC } from 'react';

import { Button } from '@/components/index';

interface BurgerButtonProps {
  className: string;
  openMenu: () => void;
}

export const BurgerButton: FC<BurgerButtonProps> = memo(
  ({ className, openMenu }) => {
    return (
      <Button
        type="button"
        className={className || ''}
        onClick={openMenu}
        ariaLabel="Toggle menu"
      >
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 0C19.5523 0 20 0.447715 20 1C20 1.51284 19.614 1.93551 19.1166 1.99327L19 2H1C0.447715 2 0 1.55228 0 1C0 0.487164 0.38604 0.0644928 0.883379 0.00672773L1 0H19ZM19 6C19.5523 6 20 6.44772 20 7C20 7.51284 19.614 7.93551 19.1166 7.99327L19 8H1C0.447715 8 0 7.55228 0 7C0 6.48716 0.38604 6.06449 0.883379 6.00673L1 6H19ZM20 13C20 12.4477 19.5523 12 19 12H1L0.883379 12.0067C0.38604 12.0645 0 12.4872 0 13C0 13.5523 0.447715 14 1 14H19L19.1166 13.9933C19.614 13.9355 20 13.5128 20 13Z"
            fill="#0A1629"
          />
        </svg>
      </Button>
    );
  }
);

BurgerButton.displayName = 'Burger Button';
