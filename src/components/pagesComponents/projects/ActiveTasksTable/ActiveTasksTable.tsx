import type { FC } from "react";

// import styles from './ActiveTasksTable.module.scss';
import { Grid } from "@/components/index";
import { ActiveSidebar } from "../ActiveSidebar/ActiveSidebar";

export const ActiveTasksTable: FC = () => {
  return (
    <Grid
      tag="div"
      width="100%"
      maxWidth="100%"
      height={"100%"}
      backgroundColor="#fff"
      boxShadow="0 6px 58px 0 rgba(196, 203, 214, 0.1)"
      borderRadius="24px"
    >
      <ActiveSidebar />
    </Grid>
  );
};
