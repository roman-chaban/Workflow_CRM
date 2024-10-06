export interface Task {
  taskId: number;
  taskName: string;
  estimate: string;
  spentTime: string;
  assignee: string;
  priority: string;
  isDone: string;
}

export type TTasks = Task[];
