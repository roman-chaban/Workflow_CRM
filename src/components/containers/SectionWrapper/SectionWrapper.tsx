import type { FC, ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className = '',
}) => {
  return <section className={className}>{children}</section>;
};
