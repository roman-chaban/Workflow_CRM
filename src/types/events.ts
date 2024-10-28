export interface Event {
  id: number;
  title: string;
  day: string;
  hour: string;
  duration: string;
  colorVariant: string;
  titleIcon: string;
  icon: string;
}

export type Events = Array<Event>;
