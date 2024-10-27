"use client";

import type { FC, ReactNode } from "react";

import "@/styles/main/main.scss";
import { usePathname } from "next/navigation";

interface GlobalWrapperProps {
  children: ReactNode;
}

export const GlobalWrapper: FC<GlobalWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  const checkGlobalWrapperClassName = pathname === "/auth/signIn";

  return (
    <div
      className={
        checkGlobalWrapperClassName ? "globalAuthWrapper" : "globalWrapper"
      }
    >
      {children}
    </div>
  );
};
