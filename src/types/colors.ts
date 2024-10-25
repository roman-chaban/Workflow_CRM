export type BasicColors = {
  white: string;
  black: string;
  gray: string;
  lightGray: string;
};

export type BackgroundColors = {
  main: string;
  support: string;
  modal: string;
};

export type ShadowColors = {
  box: string;
  support: string;
  modal: string;
};

export type VariantColors = {
  second: string;
  third: string;
  four: string;
};

export type StatusColors = {
  error: string;
  success: string;
  inProgress: string;
  todo: string;
  done: string;
  low: string;
  medium: string;
};

export type BorderColors = {
  light: string;
  image: string;
  border: string;
};

export type LoaderColors = {
  main: string;
  border: string;
};

export type Colors = {
  basic: BasicColors;
  background: BackgroundColors;
  shadows: ShadowColors;
  variants: VariantColors;
  status: StatusColors;
  borders: BorderColors;
  loader: LoaderColors;
};
