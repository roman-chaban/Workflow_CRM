import type { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button/Button";

import styles from "./SignInSubmit.module.scss";

export const SignInSubmit: FC = () => {
  return (
    <div className={styles["signInSubmit"]}>
      <Button type={"submit"} className={styles["submitButton"]}>
        Sign In{" "}
        <Image
          src={"/images/signIn/arrow.svg"}
          alt={"Arrow Icon"}
          width={24}
          height={24}
        />
      </Button>
      <Link href={"#/"} className={styles["submitLink"]}>
        Don’t have an account?
      </Link>
    </div>
  );
};
