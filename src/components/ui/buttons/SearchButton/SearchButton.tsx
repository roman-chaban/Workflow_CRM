import type { FC } from 'react';

import { Button } from '@/components/index';
import Image from 'next/image';

interface SearchButtonProps {
  className: string;
}

export const SearchButton: FC<SearchButtonProps> = ({ className }) => {
  return (
    <Button type="button" className={className}>
      <Image
        src={'icons/buttonsIcons/search.svg'}
        alt="Search Icon"
        width={24}
        height={24}
      />
    </Button>
  );
};
