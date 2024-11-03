import type { FC } from "react";

import { ViewLink } from "@/components/ui/ViewLink/ViewLink";

import { PATHS } from "@/enums/paths";

import styles from "./ProjectsNav.module.scss";

export const ProjectsNav: FC = () => {
  return (
    <div className={styles["projects__nav"]}>
      <ViewLink href={PATHS.PROJECTS}>Projects</ViewLink>
    </div>
  );
};
