import { FC } from 'react';

import { Message, Messages } from '@/types/chat-types';

import styles from './ChatDisplay.module.scss';

interface ChatDisplayProps {
  messages: Messages;
}

export const ChatDisplay: FC<ChatDisplayProps> = ({ messages }) => {
  return (
    <div className={styles['messagesContainer']}>
      {messages.map((message: Message, index: number) => (
        <div key={index + 1} className={styles['message']}>
          {message}
        </div>
      ))}
    </div>
  );
};
