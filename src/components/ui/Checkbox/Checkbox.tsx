import type { FC } from "react";

import { UseFormRegisterReturn } from "react-hook-form";

import { RegisterInput } from "@/components/ui/RegisterInput/RegisterInput";

interface CheckboxProps {
  register: UseFormRegisterReturn;
  classNames: {
    input: string;
    label: string;
    labelText?: string;
  };
}

export const Checkbox: FC<CheckboxProps> = ({ classNames, register }) => {
  return (
    <RegisterInput
      properties={{
        type: "checkbox",
        name: "remember",
        htmlFor: "remember",
        id: "remember",
        label: "Repeat every day",
      }}
      classNames={{
        input: classNames.input,
        label: classNames.label,
        labelText: classNames.labelText,
      }}
      register={register}
    />
  );
};
