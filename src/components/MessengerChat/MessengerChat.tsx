import type { FC } from 'react';
import { Box, Grid } from '../index/index';

import styles from './MessengerChat.module.scss';
import { MessengerBar } from '../Chat/MessengerBar/MessengerBar';
import { MessengerHeader } from '../Chat/MessengerHeader/MessengerHeader';
import { MessengerChatMain } from '../Chat/MessengerChatMain/MessengerChatMain';

export const MessengerChat: FC = () => {
  return (
    <Grid
      tag="div"
      className={styles['messengerChat']}
      gridTemplateColumns="1fr"
    >
      <Box className={styles['messengerContainer']}>
        <MessengerBar />
        <Box className={styles['chatMain']}>
          <MessengerHeader />
          <MessengerChatMain />
        </Box>
      </Box>
    </Grid>
  );
};
