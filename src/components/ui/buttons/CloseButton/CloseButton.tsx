"use client";

import type { FC } from "react";

import { PATHS } from "@/enums/paths";
import { Button } from "@/components/ui/Button/Button";

import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/pages/SignIn.module.scss";
import useMediaQuery from "@/hooks/useMediaQuery";

export const CloseButton: FC = () => {
  const isTablet = useMediaQuery("(max-width: 1025px)");

  return (
    <Button
      type={"button"}
      className={`${styles["CloseButton"]} ${styles["CloseButtonPrimary"]}`}
    >
      <Link href={PATHS.HOME}>
        {isTablet ? (
          <Image
            priority
            src={"/images/signIn/blue-arrow.svg"}
            alt="Close Page Icon"
            width={30}
            height={30}
            className={styles["closeIconPrimary"]}
          />
        ) : (
          <Image
            priority
            src={"/images/signIn/close.svg"}
            alt="Close Page Icon"
            width={30}
            height={30}
            className={styles["closeIcon"]}
          />
        )}
      </Link>
    </Button>
  );
};
