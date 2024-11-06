export interface DragType {
  onDragStart: (event: React.DragEvent<HTMLDivElement>, taskId: string) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, taskId: string) => void;
}

export type DraggingTaskId = string | null;
