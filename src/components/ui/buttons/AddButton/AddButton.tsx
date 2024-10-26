import type { FC } from 'react';

import { Button } from '@/components/index';

import { Plus } from '@/components/icons/Plus/Plus';

interface AddButtonProps {
  className: string;
}

export const AddButton: FC<AddButtonProps> = ({ className }) => {
  return (
    <Button type="button" className={className}>
      <Plus color="white" />
    </Button>
  );
};
