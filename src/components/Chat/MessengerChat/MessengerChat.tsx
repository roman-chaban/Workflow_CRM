import type { FC } from "react";

import {
  Box,
  Grid,
  MessengerBar,
  MessengerHeader,
  MessengerChatMain,
} from "../../index";

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
