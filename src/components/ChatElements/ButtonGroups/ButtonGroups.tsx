import type { FC } from 'react';

import { AddLink } from '@/components/ui/buttons/AddLink/AddLink';
import { AttachButton } from '@/components/ui/buttons/AttachButton/AttachButton';
import { MentionButton } from '@/components/ui/buttons/MentionButton/MentionButton';

interface ButtonGroupsProps {
  className: string;
}

export const ButtonGroups: FC<ButtonGroupsProps> = ({ className }) => {
  return (
    <div className={className}>
      <AttachButton />
      <AddLink />
      <MentionButton />
    </div>
  );
};
