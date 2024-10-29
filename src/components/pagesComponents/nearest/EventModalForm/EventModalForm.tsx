"use client";

import type { FC } from "react";
import { useForm } from "react-hook-form";

import { RegisterInput } from "@/components/ui/RegisterInput/RegisterInput";
import { Select } from "@/components/ui/Select/Select";
import { EventRepeat } from "@/components/pagesComponents/nearest/EventRepeat/EventRepeat";
import { Textarea } from "@/components/ui/Textarea/Textarea";

import { selectClassNames } from "@/components/pagesComponents/nearest/EventModalForm/selectClassNames/selectClassNames";
import {
  options,
  priorityOptions,
} from "@/components/pagesComponents/nearest/EventModalForm/options/options";

import styles from "./EventModalForm.module.scss";
import { DateTimePicker } from "@/components/pagesComponents/nearest/DateTimePicker/DateTimePicker";

interface FormState {
  name: string;
}

export const EventModalForm: FC = () => {
  const { register } = useForm<FormState>();

  return (
    <form className={styles["eventModalForm"]}>
      <div>
        <RegisterInput
          properties={{
            name: "name",
            type: "text",
            htmlFor: "name",
            id: "name",
            label: "Event Name",
            placeholder: "Your Birthday",
          }}
          classNames={{
            input: styles["nameInput"],
            label: styles["nameLabel"],
          }}
          register={{ ...register("name", {}) }}
        />
      </div>
      <Select
        options={options}
        classNames={selectClassNames}
        selectLabel={"Event Category"}
        defaultValue={"Corporate Event"}
      />
      <Select
        options={priorityOptions}
        classNames={selectClassNames}
        selectLabel={"Priority"}
        defaultValue={"Low"}
      />
      <DateTimePicker />
      <Textarea
        className={styles["descriptionArea"]}
        labelClassName={styles["descriptionLabel"]}
        name={"description"}
        id={"description"}
        htmlFor={"description"}
        placeholder={"Add some description of the event"}
      >
        Description
      </Textarea>
      <EventRepeat />
    </form>
  );
};
