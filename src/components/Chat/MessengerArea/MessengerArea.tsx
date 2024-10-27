"use client";

import { ChangeEvent, FC, useRef } from "react";

import styles from "./MessengerArea.module.scss";

import { Textarea } from "@/components/index";
import { EmojiButton } from "@/components/ui/buttons/EmojiButton/EmojiButton";
import { SendButton } from "@/components/ui/buttons/SendButton/SendButton";
import { ButtonGroups } from "../ButtonGroups/ButtonGroups";

import { ChatText, TextAreaRef } from "@/types/chat-types";

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
