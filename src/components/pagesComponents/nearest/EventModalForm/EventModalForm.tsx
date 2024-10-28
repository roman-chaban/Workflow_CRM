"use client";

import type { FC } from "react";
import { useForm } from "react-hook-form";

import { RegisterInput } from "@/components/ui/RegisterInput/RegisterInput";
import { Select } from "@/components/ui/Select/Select";

import styles from "./EventModalForm.module.scss";
import { selectClassNames } from "@/components/pagesComponents/nearest/EventModalForm/selectClassNames/selectClassNames";
import { options } from "@/components/pagesComponents/nearest/EventModalForm/options/options";

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
    </form>
  );
};
