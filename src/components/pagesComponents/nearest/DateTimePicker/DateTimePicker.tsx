"use client";

import type { FC } from "react";

import { useForm } from "react-hook-form";

import { RegisterInput } from "@/components/index/index";

import styles from "../EventModalForm/EventModalForm.module.scss";

interface DateTimePickerFormState {
  date: string;
  time: string;
}

const classNames = {
  input: styles["trackerInput"],
  label: styles["trackerLabel"],
  labelText: styles["trackerLabelText"],
};

export const DateTimePicker: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<DateTimePickerFormState>();

  return (
    <div className={styles["dateTimePicker"]}>
      <RegisterInput
        properties={{
          name: "date",
          id: "date",
          htmlFor: "date",
          type: "date",
          placeholder: "Select Date",
          label: "Date",
        }}
        classNames={classNames}
        register={{ ...register("date", {}) }}
      />
      <RegisterInput
        properties={{
          name: "time",
          id: "time",
          htmlFor: "time",
          type: "time",
          placeholder: "Select Time",
          label: "Time",
        }}
        classNames={classNames}
        register={{ ...register("time", {}) }}
      />
    </div>
  );
};
