import type { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type: 'reset' | 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
