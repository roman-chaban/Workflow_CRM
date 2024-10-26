import { Button } from '@/components/index';
import Image from 'next/image';
import { FC } from 'react';

interface MentionButtonProps {
  className?: string;
}

export const MentionButton: FC<MentionButtonProps> = ({ className }) => {
  return (
    <Button type="button" className={className}>
      <Image
        src={'icons/chatIcons/mention.svg'}
        alt="Mention Icon"
        width={24}
        height={24}
      />
    </Button>
  );
};
