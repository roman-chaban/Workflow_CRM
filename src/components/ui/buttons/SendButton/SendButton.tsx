import { Button } from '@/components/index';
import Image from 'next/image';
import { FC } from 'react';

interface SearchButtonProps {
  className: string;
  onClick: () => void;
}

export const SendButton: FC<SearchButtonProps> = ({ className, onClick }) => {
  return (
    <Button type="button" className={className} onClick={onClick}>
      <Image
        src={'/icons/chatIcons/telegram.svg'}
        alt="Telegram Button"
        width={24}
        height={24}
      />
    </Button>
  );
};
