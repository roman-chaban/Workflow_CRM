import type { FC } from 'react';

import { Button } from '@/components/index';

import Image from 'next/image';

interface NotificationButtonProps {
  className: string;
}

export const NotificationButton: FC<NotificationButtonProps> = ({
  className,
}) => {
  return (
    <Button type="button" className={className}>
      <Image
        src={'icons/buttonsIcons/notification.svg'}
        alt="Search Icon"
        width={24}
        height={24}
      />
    </Button>
  );
};
