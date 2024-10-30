"use client";

import { ChangeEvent, type FC, useRef } from "react";

import {
  Textarea,
  EmojiButton,
  SendButton,
  ButtonGroups,
} from "@/components/index";

import { ChatText, TextAreaRef } from "@/types/chat-types";

import styles from "./MessengerArea.module.scss";

interface MessengerAreaProps {
  chatText: ChatText;
  setChatTextAction: (text: ChatText) => void;
  onSendMessageAction: () => void;
}

export const MessengerArea: FC<MessengerAreaProps> = ({
  chatText,
  setChatTextAction,
  onSendMessageAction,
}) => {
  const textareaRef = useRef<TextAreaRef>(null);

  const handleChangeChatText = (event: ChangeEvent<TextAreaRef>) => {
    setChatTextAction(event.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className={styles["messengerAreaContainer"]}>
      <ButtonGroups className={styles["messengerAreaConfigureButtons"]} />

      <Textarea
        ref={textareaRef}
        labelClassName={styles["messengerTextareaLabel"]}
        placeholder="Type your message here…"
        value={chatText}
        onChange={handleChangeChatText}
        className={styles["messengerTextarea"]}
        id="chat-text"
        name="chatText"
        htmlFor={"chat-text"}
      />

      <div className={styles["messengerAreaButtons"]}>
        <EmojiButton className={styles["emojiButton"]} />
        <SendButton
          className={styles["sendButton"]}
          onClick={onSendMessageAction}
        />
      </div>
    </div>
  );
};
