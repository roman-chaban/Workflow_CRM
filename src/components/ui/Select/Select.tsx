"use client";

import { SelectProps } from "@/types/select";
import React, { useId, useState, type FC } from "react";

export const Select: FC<SelectProps> = ({
  options,
  defaultValue,
  onChange,
  selectLabel,
  classNames,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  const selectId = useId();

  const handleSelectOption = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  const handleToggleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={classNames.selectContainer}>
      <label htmlFor={selectId} className={classNames.label}>
        {selectLabel}
      </label>

      <button
        id={selectId}
        className={`${classNames.select} ${isOpen ? classNames.open : ""}`}
        onClick={handleToggleSelect}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedValue || defaultValue || "Choose an option"}
      </button>

      {isOpen && (
        <ul
          className={`${classNames.optionsContainer} ${isOpen ? classNames.optionsOpen : ""}`}
          role="listbox"
          aria-labelledby={selectId}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={classNames.option}
              onClick={() => handleSelectOption(option.value)}
              role="option"
              aria-selected={selectedValue === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
