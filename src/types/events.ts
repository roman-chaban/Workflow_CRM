export interface Event {
  id: number;
  title: string;
  day: string;
  hour: string;
  duration: string;
}

export type TEvents = Array<Event>;
