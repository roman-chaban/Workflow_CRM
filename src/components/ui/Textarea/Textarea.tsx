import type { CSSProperties, FC, ReactNode } from 'react';

export type TextareaType = {
  className: string;
  labelClassName: string;
  name: string;
  id: string;
  style?: CSSProperties;
  htmlFor: string;
  children: ReactNode;
  placeholder: string;
};

export const Textarea: FC<TextareaType> = ({
  className,
  name,
  id,
  style,
  children,
  labelClassName,
  placeholder,
  htmlFor = '',
}) => {
  return (
    <label htmlFor={htmlFor} className={labelClassName}>
      {children}
      <textarea
        className={className}
        name={name}
        id={id}
        placeholder={placeholder}
        style={style}
      ></textarea>
    </label>
  );
};
