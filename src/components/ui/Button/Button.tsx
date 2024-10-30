import type { CSSProperties, FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type: "reset" | "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
  ariaPressed?: boolean;
  id?: number | string;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  style,
  className,
  disabled,
  onClick,
  ariaPressed,
  id,
}) => {
  return (
    <button
      data-id={id}
      style={style}
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
      aria-pressed={ariaPressed}
    >
      {children}
    </button>
  );
};
