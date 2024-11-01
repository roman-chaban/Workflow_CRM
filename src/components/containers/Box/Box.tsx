import type { CSSProperties, FC, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Box: FC<BoxProps> = ({ children, className = "", style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
