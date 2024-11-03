export interface ITimeTrackerMenuItem {
  id: number;
  title: string;
  modified: string;
}

export type TimeTrackerMenuItems = ITimeTrackerMenuItem[];

export const TimeTrackerMenuItems: TimeTrackerMenuItems = [
  {
    id: 1,
    title: "Technical task",
    modified: "Last modified Sep 12, 2020",
  },
  {
    id: 2,
    title: "Project Specification",
    modified: "Last modified Sep 24, 2020",
  },
  {
    id: 3,
    title: "Customer Requirements",
    modified: "Last modified Oct 8, 2020",
  },
  {
    id: 4,
    title: "Work Process",
    modified: "Last modified today",
  },
  {
    id: 5,
    title: "Reports",
    modified: "Last modified Nov 10, 2020",
  },
];
