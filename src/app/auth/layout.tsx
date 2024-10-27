import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode | null | undefined;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <>{children}</>;
}

AuthLayout.displayName = "AuthLayout";
