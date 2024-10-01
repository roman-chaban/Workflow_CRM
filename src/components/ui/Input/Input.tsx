import type { ChangeEvent, CSSProperties, FC } from 'react';

type InputTypes =
  | 'text'
  | 'email'
  | 'search'
  | 'password'
  | 'checkbox'
  | 'radio';

interface InputClassNames {
  label: string;
  labelText: string;
  input: string;
}

interface InputProps {
  properties: {
    htmlFor: string;
    label?: string;
    type: InputTypes;
    id: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string;
    name: string;
    style?: CSSProperties;
  };
  classNames: InputClassNames;
  inputIcon?: JSX.Element;
}

export const Input: FC<InputProps> = ({
  properties: {
    htmlFor = '',
    label = '',
    type = 'text',
    id = '',
    name = '',
    value,
    onChange,
    className = '',
    placeholder = '',
    style,
  },
  classNames: {
    label: labelClass,
    labelText: labelTextClass,
    input: inputClass,
  },
  inputIcon,
}) => {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {label && <span className={labelTextClass}>{label}</span>}
      {inputIcon}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${inputClass} ${className}`}
        placeholder={placeholder}
        style={style}
        aria-label={label || placeholder}
      />
    </label>
  );
};
