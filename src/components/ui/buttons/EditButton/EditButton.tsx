import type { FC } from 'react';

import { Button } from '@/components/index';

import Image from 'next/image';

interface EditButtonProps {
  className: string;
}

export const EditButton: FC<EditButtonProps> = ({ className }) => {
  return (
    <Button type="button" className={className}>
      <Image
        src={'/images/info-portal/icons/edit.svg'}
        alt="Edit Icon"
        width={24}
        height={24}
      />
    </Button>
  );
};
