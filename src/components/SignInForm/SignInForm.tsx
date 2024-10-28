"use client";

import type { FC } from "react";

import { useForm } from "react-hook-form";

import Image from "next/image";

import { RegisterInput } from "@/components/ui/RegisterInput/RegisterInput";
import { SignInRemember } from "@/components/SignInRemember/SignInRemember";
import { SignInSubmit } from "@/components/SignInSubmit/SignInSubmit";

import styles from "./SignInForm.module.scss";

export interface FormData {
  email: string;
  password: string;
  checked: boolean;
}

export const SignInForm: FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormData>();

  const handleSubmitForm = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      className={styles["signInForm"]}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <h2 className={styles["signInFormTitle"]}>Sign In to Workroom</h2>
      <div className={styles["signInFormInputs"]}>
        <div className={styles["signInFormInputsEmail"]}>
          <RegisterInput
            properties={{
              type: "email",
              label: "Email Address",
              className: "",
              name: "Email Address",
              htmlFor: "Email Address",
              id: "Email Address",
              placeholder: "youremail@gmail.com",
            }}
            classNames={{
              input: styles["emailInput"],
              label: styles["emailLabel"],
              labelText: "",
            }}
            register={{ ...register("email", {}) }}
          />
          {errors.email && <span>{errors.email?.message}</span>}
        </div>
        <div className={styles["signInFormInputsPassword"]}>
          <RegisterInput
            properties={{
              type: "password",
              label: "Password",
              className: "",
              name: "Password",
              htmlFor: "Password",
              id: "Password",
              placeholder: "Your password",
            }}
            classNames={{
              input: styles["passwordInput"],
              label: styles["passwordLabel"],
              labelText: "",
            }}
            inputIcon={
              <Image
                src={"/images/signIn/view-password.svg"}
                alt={"View Password icon"}
                width={24}
                height={24}
                className={styles["viewPasswordIcon"]}
              />
            }
            register={{ ...register("password", {}) }}
          />
          {errors.email && <span>{errors.password?.message}</span>}
        </div>
      </div>
      <SignInRemember />
      <SignInSubmit />
    </form>
  );
};
