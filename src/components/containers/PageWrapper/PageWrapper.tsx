import type { FC, ReactNode } from 'react';

export const PageWrapper: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
