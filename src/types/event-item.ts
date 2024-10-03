export interface EventItem {
  id: number;
  icon: string;
  titleIcon: string;
  title: string;
  day: string;
  hour: string;
  duration: string;
  colorVariant: string;
}

export type TEventsItems = Array<EventItem>;
