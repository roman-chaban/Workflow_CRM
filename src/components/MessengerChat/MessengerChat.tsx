import type { FC } from 'react';
import { Grid } from '../index/index';

import styles from './MessengerChat.module.scss';

export const MessengerChat: FC = () => {
  return (
    <Grid tag="div" className={styles['messengerChat']}>
      Chat
    </Grid>
  );
};
