import { type FC, type ReactNode, type CSSProperties } from 'react';

interface GridProps {
  width?: string;
  height?: string;
  display?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gap?: string;
  children: ReactNode;
  isSection: boolean;
}

export const Grid: FC<GridProps> = ({
  display = 'grid',
  height = '100%',
  width = '100%',
  gap = '',
  gridTemplateColumns = 'repeat(12, 1fr)',
  gridTemplateRows = '1fr',
  children,
  isSection = false,
}) => {
  const gridStyles: CSSProperties = {
    width,
    height,
    display,
    gridTemplateColumns,
    gridTemplateRows,
    gap
  };

  return isSection ? (
    <section style={gridStyles}>{children}</section>
  ) : (
    <div style={gridStyles}>{children}</div>
  );
};
