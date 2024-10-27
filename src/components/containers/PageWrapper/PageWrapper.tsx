"use client";

import type { FC, ReactNode } from "react";
import "@/styles/main/main.scss";
import { usePathname } from "next/navigation";

export const PageWrapper: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const pathname = usePathname();

  const shouldUseGlobalWrapper = pathname === "/auth/signIn";

  return (
    <>
      {shouldUseGlobalWrapper ? (
        <>{children}</>
      ) : (
        <div className="page">{children}</div>
      )}
    </>
  );
};
