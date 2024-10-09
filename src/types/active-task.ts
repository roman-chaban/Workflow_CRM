export interface IActiveTask {
  taskId: string;
  code: string;
  title: string;
  duration: string;
  profileIcon: string;
  isUp: boolean;
}

export type TActiveTasks = IActiveTask[];
