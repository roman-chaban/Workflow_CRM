export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  selectLabel?: string;
  classNames: SelectClassNames;
}

export interface SelectClassNames {
  label: string;
  select: string;
  defaultOption: string;
  option: string;
  optionsContainer: string;
  selectContainer: string;
}
