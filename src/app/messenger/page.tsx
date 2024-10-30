import { Grid } from "@/components/index";
import { Heading } from "@/components/ui/Heading/Heading";
import { MessengerChat } from "@/components/Chat/MessengerChat/MessengerChat";

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
