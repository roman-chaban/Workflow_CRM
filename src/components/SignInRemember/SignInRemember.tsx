import type { FC } from "react";
import { Button } from "@/components/ui/Button/Button";

import styles from "./SignInRemember.module.scss";
import { RegisterInput } from "@/components/ui/RegisterInput/RegisterInput";
import { useForm } from "react-hook-form";

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
          input: "",
          label: styles["rememberLabel"],
          labelText: "",
        }}
        register={{ ...register("checkbox", {}) }}
      />

      <Button type={"button"} className={styles["forgotButton"]}>
        Forgot Password?
      </Button>
    </div>
  );
};