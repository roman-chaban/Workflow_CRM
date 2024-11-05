"use client";

import { FC, useState } from "react";

import Link from "next/link";

import { TimeTrackerMenuItems } from "@/data/timeTrackerMenu";

import styles from "../TimeTrackerSidebar/TimeTrackerSidebar.module.scss";

export const TimeTrackerMenu: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <ul role="tablist" className={styles["menuItems"]}>
      {TimeTrackerMenuItems.map((menuItem) => (
        <li
          role="tab"
          aria-selected={activeTab === menuItem.id}
          className={`${styles["menuListItem"]} ${
            activeTab === menuItem.id ? styles["active"] : ""
          }`}
          onClick={() => handleTabChange(menuItem.id)}
          key={menuItem.id}
        >
          <Link
            href={""}
            className={`${styles["menuListLink"]} ${activeTab === menuItem.id ? styles["activeTitle"] : ""}`}
          >
            {menuItem.title}
          </Link>
          <span className={styles["menuListItemModified"]}>
            {menuItem.modified}
          </span>
        </li>
      ))}
    </ul>
  );
};
