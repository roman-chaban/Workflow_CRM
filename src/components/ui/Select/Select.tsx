'use client';

import { SelectProps } from '@/types/select';
import { useId, useState, type FC } from 'react';

export const Select: FC<SelectProps> = ({
  options,
  defaultValue,
  onChange,
  selectLabel,
  classNames,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || '');
  const selectId = useId(); // Generates a unique ID

  const handleSelectOption = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={classNames.selectContainer}>
      <label htmlFor={selectId} className={classNames.label}>
        {selectLabel}
      </label>

      <button
        id={selectId}
        className={classNames.select}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedValue || defaultValue || 'Choose an option'}
      </button>

      {isOpen && (
        <ul
          className={classNames.optionsContainer}
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
