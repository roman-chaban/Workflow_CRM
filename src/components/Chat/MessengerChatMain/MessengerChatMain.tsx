'use client';

import { useState, type FC } from 'react';

import styles from './MessengerChatMain.module.scss';
import { MessengerArea } from '../MessengerArea/MessengerArea';
import { ChatDisplay } from '../ChatDisplay/ChatDisplay';
import { ChatText, Messages } from '@/types/chat-types';

export const MessengerChatMain: FC = () => {
  const [chatText, setChatText] = useState<ChatText>('');
  const [messages, setMessages] = useState<Messages>([]);

  const handleSendMessage = () => {
    if (chatText.trim()) {
      setMessages((prevMessage) => [...prevMessage, chatText]);
      setChatText('');
    }
  };

  return (
    <div className={styles['messengerChatMain']}>
      <div className={styles['messengerChatMainContainer']}>
        <ChatDisplay messages={messages} />
        <MessengerArea
          chatText={chatText}
          setChatText={setChatText}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};
