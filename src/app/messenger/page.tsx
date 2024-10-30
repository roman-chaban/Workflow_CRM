
import { Grid, Heading, MessengerChat } from "@/components/index";

import styles from "@/styles/pages/Messenger.module.scss";

export default function Messenger() {
  return (
    <Grid tag="section" gap="28px">
      <Heading level="h1" className={styles["messenger__heading"]}>
        Messenger
      </Heading>
      <MessengerChat />
    </Grid>
  );
}
