export interface IActiveTask {
  taskId: number;
  code: string;
  title: string;
  duration: string;
  profileIcon: string;
  isUp: boolean;
}

export type TActiveTasks = IActiveTask[];
