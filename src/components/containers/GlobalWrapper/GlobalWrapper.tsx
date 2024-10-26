import type { FC, ReactNode } from 'react';

import '@/styles/main/main.scss';

interface GlobalWrapperProps {
  children: ReactNode;
}

export const GlobalWrapper: FC<GlobalWrapperProps> = ({ children }) => {
  return <div className="globalWrapper">{children}</div>;
};
