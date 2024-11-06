import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DraggingTaskId } from '@/types/drag-types';
import { TActiveTasks } from '@/types/active-task';

interface DragState {
  draggingTaskId: DraggingTaskId;
  tasks: TActiveTasks | null;
}

export const initialState: DragState = {
  draggingTaskId: null,
  tasks: null,
};

export const DragSlice = createSlice({
  name: 'drag',
  initialState,
  reducers: {
    setDraggingTaskId: (state, action: PayloadAction<DraggingTaskId>) => {
      state.draggingTaskId = action.payload;
    },
    setTasks: (state, action: PayloadAction<TActiveTasks>) => {
      state.tasks = action.payload;
    },
    updateTaskOver: (
      state,
      action: PayloadAction<{ draggedIndex: number; targetIndex: number }>
    ) => {
      const { draggedIndex, targetIndex } = action.payload;
      if (state.tasks) {
        const updatedTasks = [...state.tasks];
        const [draggedTask] = updatedTasks.splice(draggedIndex, 1);
        updatedTasks.splice(targetIndex, 0, draggedTask);
        state.tasks = updatedTasks;
      }
    },
  },
});

export const { setDraggingTaskId, setTasks, updateTaskOver } =
  DragSlice.actions;
export default DragSlice.reducer;
