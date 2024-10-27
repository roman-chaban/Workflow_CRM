import { Grid } from "@/components/index";
import { MessengerChat } from "@/components/MessengerChat/MessengerChat";
import { Heading } from "@/components/ui/Heading/Heading";

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
