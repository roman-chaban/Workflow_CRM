"use client";

import { Header } from "@/components/Header/Header";

import { usePathname } from "next/navigation";

export const IsHeaderRender = () => {
  const pathname = usePathname();

  const isSignInPage = pathname === "/auth/signIn";
  return <>{!isSignInPage && <Header />}</>;
};
