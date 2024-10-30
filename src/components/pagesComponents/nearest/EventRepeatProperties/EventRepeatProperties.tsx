"use client";

import type { FC } from "react";
import { useForm } from "react-hook-form";

import { CompleteLabels } from "@/components/pagesComponents/nearest/EventRepeatProperties/CompleteLabels/CompleteLabels";
import { CompleteDays } from "@/components/pagesComponents/nearest/EventRepeatProperties/CompleteDays/CompleteDays";

import { Checkbox } from "@/components/ui/Checkbox/Checkbox";

import styles from "./EventRepeatProperties.module.scss";

interface EventRepeatPropertiesProps {
  isShowProperties: boolean;
}

export const EventRepeatProperties: FC<EventRepeatPropertiesProps> = ({
  isShowProperties,
}) => {
  const { register } = useForm();

  return (
    <div
      className={`${styles["eventPropertiesBlock"]} ${isShowProperties ? styles["show"] : ""} `}
    >
      <CompleteLabels />
      <CompleteDays />
      <Checkbox
        register={{ ...register("remember", {}) }}
        classNames={{
          label: styles["checkboxLabel"],
          input: styles["checkboxInput"],
          labelText: styles["checkBoxLabelText"],
        }}
      />
    </div>
  );
};
