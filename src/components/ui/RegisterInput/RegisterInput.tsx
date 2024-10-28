import type { CSSProperties, FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputTypes } from "@/components/ui/Input/Input";

interface RegisterInputClassNames {
  label: string;
  labelText?: string;
  input: string;
  error?: string;
}

interface RegisterInputProps {
  properties: {
    htmlFor: string;
    label?: string;
    type: InputTypes;
    id: string;
    className?: string;
    placeholder?: string;
    name: string;
    style?: CSSProperties;
  };
  classNames: RegisterInputClassNames;
  inputIcon?: JSX.Element;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

export const RegisterInput: FC<RegisterInputProps> = ({
  properties: {
    htmlFor = "",
    label = "",
    type = "text",
    id = "",
    name = "",
    className = "",
    placeholder = "",
    style,
  },
  classNames: {
    label: labelClass,
    labelText: labelTextClass,
    input: inputClass,
    error: errorClass,
  },
  inputIcon,
  error,
  register,
}) => {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {label && <span className={labelTextClass}>{label}</span>}
      {inputIcon}
      <input
        {...register}
        type={type}
        id={id}
        name={name}
        className={`${inputClass} ${className} ${error ? errorClass : ""}`}
        placeholder={placeholder}
        style={style}
        aria-label={label || placeholder}
      />
      {error && <span className={errorClass}>{error.message}</span>}
    </label>
  );
};
