export interface ActiveTask {
  title: string;
  id: number;
}

export type ActiveTasks = ActiveTask[];

export const activeTasks: ActiveTasks = [
  {
    id: 1,
    title: 'To Do',
  },
  {
    id: 2,
    title: 'In Progress',
  },
  {
    id: 3,
    title: 'In Review',
  },
  {
    id: 4,
    title: 'Done',
  },
];
