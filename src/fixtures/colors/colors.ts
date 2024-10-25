import { Colors } from "@/types/colors";

export const colors: Colors = {
  basic: {
    white: '#fff',
    black: '#0a1629',
    gray: '#7d8592',
    lightGray: '#e6edf5',
  },
  background: {
    main: '#f4f9fd',
    support: '#3f8cff',
    modal: 'rgba(33, 85, 163, 0.16)',
  },
  shadows: {
    box: '0 6px 58px rgba(196, 203, 214, 0.1)',
    support: '0 6px 12px rgba(63, 140, 255, 0.26)',
    modal: '0 1px 2px rgba(184, 200, 224, 0.22)',
  },
  variants: {
    second: '#de92eb',
    third: '#fdc748',
    four: '#6d5dd3',
  },
  status: {
    error: '#ff5630',
    success: '#00d097',
    inProgress: 'rgba(63, 140, 255, 0.12)',
    todo: 'rgba(125, 133, 146, 0.14)',
    done: '#e0f9f2',
    low: '#0ac947',
    medium: '#ffbd21',
  },
  borders: {
    light: '#e4e6e8',
    image: 'rgba(125, 133, 146, 0.2)',
    border: '#e6ebf5',
  },
  loader: {
    main: '#3498db',
    border: 'rgba(0, 0, 0, 0.1)',
  },
} as const;
