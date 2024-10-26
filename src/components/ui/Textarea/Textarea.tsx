import type {
  ChangeEventHandler,
  CSSProperties,
  FC,
  ReactNode,
  RefObject,
} from 'react';

export type TextareaType = {
  className: string;
  labelClassName: string;
  name: string;
  id: string;
  style?: CSSProperties;
  htmlFor: string;
  children?: ReactNode;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
  ref?: RefObject<HTMLTextAreaElement>;
};

export const Textarea: FC<TextareaType> = ({
  className,
  name,
  id,
  style,
  children,
  value,
  onChange,
  labelClassName,
  placeholder,
  htmlFor = '',
  ref,
}) => {
  return (
    <label htmlFor={htmlFor} className={labelClassName}>
      {children}
      <textarea
        ref={ref}
        className={className}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
      ></textarea>
    </label>
  );
};
