import { type FC, type ReactNode, type CSSProperties } from 'react';

interface GridProps {
  width?: string;
  height?: string;
  display?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  children: ReactNode;
  isSection: boolean;
}

export const Grid: FC<GridProps> = ({
  display = 'grid',
  height = '100%',
  width = '100%',
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
  };

  return isSection ? (
    <section style={gridStyles}>{children}</section>
  ) : (
    <div style={gridStyles}>{children}</div>
  );
};
