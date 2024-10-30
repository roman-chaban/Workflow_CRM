"use client";

import { usePathname } from "next/navigation";

import { Header } from "@/components/index/index";

export const IsHeaderRender = () => {
  const pathname = usePathname();

  const isSignInPage = pathname === "/auth/signIn";
  return <>{!isSignInPage && <Header />}</>;
};
