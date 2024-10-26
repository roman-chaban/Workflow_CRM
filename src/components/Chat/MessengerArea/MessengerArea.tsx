'use client';

import { ChangeEvent, FC, useRef } from 'react';

import styles from './MessengerArea.module.scss';

import { Textarea } from '@/components/index';
import { EmojiButton } from '@/components/ui/buttons/EmojiButton/EmojiButton';
import { SendButton } from '@/components/ui/buttons/SendButton/SendButton';
import { ChatText, TextAreaRef } from '@/types/chat-types';
import { ButtonGroups } from '../ButtonGroups/ButtonGroups';

interface MessengerAreaProps {
  chatText: ChatText;
  setChatText: (text: ChatText) => void;
  onSendMessage: () => void;
}

export const MessengerArea: FC<MessengerAreaProps> = ({
  chatText,
  setChatText,
  onSendMessage,
}) => {
  const textareaRef = useRef<TextAreaRef>(null);

  const handleChangeChatText = (event: ChangeEvent<TextAreaRef>) => {
    setChatText(event.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className={styles['messengerAreaContainer']}>
      <ButtonGroups className={styles['messengerAreaConfigureButtons']} />

      <Textarea
        ref={textareaRef}
        labelClassName={styles['messengerTextareaLabel']}
        placeholder="Type your message here…"
        value={chatText}
        onChange={handleChangeChatText}
        className={styles['messengerTextarea']}
        id="chat-text"
        name="chatText"
        htmlFor={'chat-text'}
      />

      <div className={styles['messengerAreaButtons']}>
        <EmojiButton className={styles['emojiButton']} />
        <SendButton className={styles['sendButton']} onClick={onSendMessage} />
      </div>
    </div>
  );
};
