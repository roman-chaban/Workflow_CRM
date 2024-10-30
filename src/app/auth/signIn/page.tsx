import { Metadata } from "next";

import AuthLayout from "@/app/auth/layout";
import {
  SectionWrapper,
  SignInBanner,
  SignInForm,
  CloseButton,
} from "@/components/index";

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
