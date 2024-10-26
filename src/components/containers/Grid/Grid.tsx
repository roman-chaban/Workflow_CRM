import { type FC, type ReactNode, type CSSProperties } from 'react';

interface GridProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  display?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gap?: string;
  children: ReactNode;
  isSection?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  tag?: 'table' | 'div' | 'section' | 'article';
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  className?: string;
}

export const Grid: FC<GridProps> = ({
  display = 'grid',
  height = '',
  width = '100%',
  maxWidth = '100%',
  gap = '',
  tag = 'div',
  gridTemplateColumns = 'repeat(12, 1fr)',
  gridTemplateRows = '1fr',
  children,
  backgroundColor = '',
  boxShadow = '',
  borderRadius = '',
  isSection = false,
  position = 'static',
  className,
}) => {
  const gridStyles: CSSProperties = {
    width,
    maxWidth,
    height,
    display,
    backgroundColor,
    boxShadow,
    borderRadius,
    gridTemplateColumns,
    gridTemplateRows,
    gap,
    position,
  };

  const Tag = tag || (isSection ? 'section' : 'div');

  return (
    <Tag style={gridStyles} className={className}>
      {children}
    </Tag>
  );
};
