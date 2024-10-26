import type { FC } from 'react';

import { Button } from '@/components/index';

import Image from 'next/image';

interface MoreButtonProps {
  className: string;
}

export const MoreButton: FC<MoreButtonProps> = ({ className }) => {
  return (
    <Button type="button" className={className}>
      <Image
        src={'icons/buttonsIcons/more.svg'}
        alt="Search Icon"
        width={24}
        height={24}
      />
    </Button>
  );
};
