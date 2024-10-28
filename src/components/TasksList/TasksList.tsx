import type { FC } from "react";

import Image from "next/image";

import { ProjectItem } from "@/types/project-item";

import styles from "../Projects/ProjectItem/ProjectItem.module.scss";

interface TasksListProps {
  item: ProjectItem;
}

export const TasksList: FC<TasksListProps> = ({ item }) => {
  return (
    <ul className={styles["tasks__list"]}>
      <li className={styles["tasks__list-item"]}>
        All tasks{" "}
        <strong className={styles["tasks__list-count"]}>
          {item.totalTaskCount}
        </strong>
      </li>
      <li className={styles["tasks__list-item"]}>
        Active tasks
        <strong className={styles["tasks__list-count"]}>
          {item.activeTaskCount}
        </strong>
      </li>
      <li className={styles["tasks__list-item"]}>
        Assignees
        <strong
          className={styles["tasks__list-count"]}
          id={styles["tasks__list-items"]}
        >
          {item.icons.map((icon, indx) => (
            <Image
              src={icon}
              key={indx + 1}
              alt="Profile Image"
              width={28}
              height={28}
              className={styles["profile__image"]}
            />
          ))}
          {item.totalRating === 0 ? (
            ""
          ) : (
            <span className={styles["tasks__total-rating"]}>
              +{item.totalRating}
            </span>
          )}
        </strong>
      </li>
    </ul>
  );
};
