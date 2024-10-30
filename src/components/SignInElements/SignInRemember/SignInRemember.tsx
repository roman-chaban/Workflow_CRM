import type { FC } from "react";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button/Button";
import { RegisterInput } from "@/components/ui/RegisterInput/RegisterInput";

import styles from "./SignInRemember.module.scss";

interface MemberData {
  checkbox: boolean;
}

export const SignInRemember: FC = () => {
  const { register } = useForm<MemberData>();

  return (
    <div className={styles["signInRemember"]}>
      <RegisterInput
        properties={{
          htmlFor: "remember",
          id: "remember",
          type: "checkbox",
          label: "Remember me",
          name: "member",
        }}
        classNames={{
          input: styles["checkboxRemember"],
          label: styles["checkboxRememberLabel"],
          labelText: styles["checkboxRememberLabelText"],
        }}
        register={{ ...register("checkbox", {}) }}
      />

      <Button type={"button"} className={styles["forgotButton"]}>
        Forgot Password?
      </Button>
    </div>
  );
};
