import { Metadata } from "next";

import { SectionWrapper } from "@/components/index";
import AuthLayout from "@/app/auth/layout";
import { SignInBanner } from "@/components/SignInBanner/SignInBanner";
import { SignInForm } from "@/components/SignInForm/SignInForm";
import { CloseButton } from "@/components/ui/buttons/CloseButton/CloseButton";

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
          <CloseButton />
        </div>
      </SectionWrapper>
    </AuthLayout>
  );
}
