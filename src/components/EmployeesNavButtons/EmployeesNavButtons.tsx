import { useState, type FC } from "react";

import { Button } from "../index";

import { ActiveTabs } from "@/app/employees/page";

import styles from "@/components/EmployeesNav/EmployeesNav.module.scss";

interface EmployeesNavButtonsProps {
  setActiveTab: (tab: ActiveTabs) => void;
}

export const EmployeesNavButtons: FC<EmployeesNavButtonsProps> = ({
  setActiveTab,
}) => {
  const [activeTab, setActiveTabState] = useState<ActiveTabs>("list");

  const handleChangeTab = (tab: ActiveTabs) => {
    setActiveTabState(tab);
    setActiveTab(tab);
  };

  return (
    <div className={styles["employees__nav-buttons"]}>
      <Button
        type={"button"}
        className={`${styles["list__button"]} ${activeTab === "list" ? styles["active"] : ""}`}
        onClick={() => handleChangeTab("list")}
        ariaPressed={activeTab === "list"}
      >
        List
      </Button>
      <Button
        type={"button"}
        className={`${styles["activity__button"]} ${activeTab === "activity" ? styles["active"] : ""}`}
        onClick={() => handleChangeTab("activity")}
        ariaPressed={activeTab === "activity"}
      >
        Activity
      </Button>
    </div>
  );
};
