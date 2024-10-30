import type { FC } from "react";

import { Box, Grid } from "../../index";
import { MessengerBar } from "../MessengerBar/MessengerBar";
import { MessengerHeader } from "../MessengerHeader/MessengerHeader";
import { MessengerChatMain } from "../MessengerChatMain/MessengerChatMain";

import styles from "./MessengerChat.module.scss";

export const MessengerChat: FC = () => {
  return (
    <Grid
      tag="div"
      className={styles["messengerChat"]}
      gridTemplateColumns="1fr"
    >
      <Box className={styles["messengerContainer"]}>
        <MessengerBar />
        <Box className={styles["chatMain"]}>
          <MessengerHeader />
          <MessengerChatMain />
        </Box>
      </Box>
    </Grid>
  );
};
