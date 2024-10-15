export type ReporterItem = {
  id: string;
  name: string;
  label: string;
  icon: string;
};

export const reporterItems: ReporterItem[] = [
  {
    id: 'design',
    icon: '/icons/reporter/primary-profile-icon.svg',
    name: 'Oscar Holloway',
    label: 'design',
  },
  {
    id: 'development',
    icon: '/icons/reporter/secondary-profile-icon.svg',
    name: 'Leonard Rodriquez',
    label: 'development',
  },
  {
    id: 'testing',
    icon: '/icons/reporter/tertiary-profile-icon.svg',
    name: 'Owen Chambers',
    label: 'testing',
  },
  {
    id: 'marketing',
    icon: '/icons/reporter/fourth-profile-icon.svg',
    name: 'Gabriel Flowers',
    label: 'marketing',
  },
  {
    id: 'management',
    icon: '/icons/reporter/fifth-profile-icon.svg',
    name: 'Violet Robbins',
    label: 'management',
  },
];