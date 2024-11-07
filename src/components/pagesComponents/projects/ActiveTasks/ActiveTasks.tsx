"use client";

import React, { type FC, useEffect } from "react";

import { useFetch } from "@/hooks/useFetch";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

import { ActiveTask } from "../ActiveTask/ActiveTask";
import { LoadingSpinner } from "@/components/index";

import { TActiveTasks } from "@/types/active-task";

import {
  setDraggingTaskId,
  setTasks,
  updateTaskOver,
} from "@/store/slices/DragSlice";

import styles from "./ActiveTasks.module.scss";

export const ActiveTasks: FC = () => {
  const { data, loading } = useFetch<TActiveTasks>({
    url: "/data/active-tasks.json",
  });

  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.drag.tasks);
  const draggingTaskId = useAppSelector((state) => state.drag.draggingTaskId);

  useEffect(() => {
    if (data) {
      dispatch(setTasks(data));
    }
  }, [data, dispatch]);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    taskId: string,
  ) => {
    dispatch(setDraggingTaskId(taskId));
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetTaskId: string,
  ) => {
    event.preventDefault();

    if (draggingTaskId && tasks) {
      const updatedTasks = [...tasks];
      const draggedIndex = updatedTasks.findIndex(
        (task) => task.taskId === draggingTaskId,
      );
      const targetIndex = updatedTasks.findIndex(
        (task) => task.taskId === targetTaskId,
      );

      if (draggedIndex !== -1 && targetIndex !== -1) {
        dispatch(updateTaskOver({ draggedIndex, targetIndex }));
      }
      dispatch(setDraggingTaskId(null));
    }
  };

  if (loading) return <LoadingSpinner />;

  if (!tasks) {
    return <div>No tasks available</div>;
  }

  return (
    <ul className={styles["active__tasks"]}>
      {tasks.map((task) => (
        <ActiveTask
          key={task.taskId}
          task={task}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          isDragging={task.taskId === draggingTaskId}
        />
      ))}
    </ul>
  );
};
