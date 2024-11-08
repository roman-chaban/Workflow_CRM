import { FC } from 'react';

import Image from 'next/image';

export const Notification: FC = () => {
  return (
    <Image
      alt="Notifications Icon"
      src="/icons/projects/notifications.svg"
      width={24}
      height={24}
    />
  );
};
