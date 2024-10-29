import { memo, type FC } from "react";

import { Input } from "../index";

import { Task, taskGroups } from "@/data/taskGroups";
import styles from "./TaskGroup.module.scss";

export const TaskGroup: FC = memo(() => {
  return (
    <div className={styles["taskGroup"]}>
      <div className={styles["taskGroup__container"]}>
        <h5 className={styles["taskGroup__title"]}>Task Group</h5>
        <div className={styles["taskGroup__checkboxes"]}>
          {taskGroups.map((task: Task) => (
            <Input
              key={task.id}
              properties={{
                type: "checkbox",
                htmlFor: task.id,
                id: task.id,
                name: task.name,
                value: "",
                label: task.label,
                onChange: () => {},
              }}
              classNames={{
                input: styles["checkboxInput"],
                label: styles["checkboxLabel"],
                labelText: styles["checkboxLabel"],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

TaskGroup.displayName = "TaskGroup";
