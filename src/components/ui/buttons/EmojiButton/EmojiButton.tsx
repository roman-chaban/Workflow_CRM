import type { FC } from 'react';

import { Button } from '@/components/index';

import Image from 'next/image';

interface EmojiButtonProps {
  className: string;
}

export const EmojiButton: FC<EmojiButtonProps> = ({ className }) => {
  return (
    <Button type="button" className={className}>
      <Image
        src={'icons/chatIcons/emoji.svg'}
        alt="Emoji Button"
        width={24}
        height={24}
      />
    </Button>
  );
};
