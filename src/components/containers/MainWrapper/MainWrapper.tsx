import type { FC, ReactNode } from "react";

export const MainWrapper: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <main className={className}>{children}</main>;
};
