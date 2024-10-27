import { Metadata } from "next";

import { Button, SectionWrapper } from "@/components/index";
import AuthLayout from "@/app/auth/layout";
import { SignInBanner } from "@/components/SignInBanner/SignInBanner";
import { SignInForm } from "@/components/SignInForm/SignInForm";

import Link from "next/link";
import Image from "next/image";

import { PATHS } from "@/constants/paths";

import styles from "@/styles/pages/SignIn.module.scss";

export const metadata: Metadata = {
  title: "Workflow CRM | Sign In",
};

export default function SignIn() {
  return (
    <AuthLayout>
      <SectionWrapper className={styles["signIn"]}>
        <div className={styles["signInContainer"]}>
          <SignInBanner />
          <SignInForm />
          <Button type={"button"} className={styles["CloseButton"]}>
            <Link href={PATHS.HOME}>
              <Image
                priority
                src={"/images/signIn/close.svg"}
                alt="Close Page Icon"
                width={30}
                height={30}
              />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </AuthLayout>
  );
}
