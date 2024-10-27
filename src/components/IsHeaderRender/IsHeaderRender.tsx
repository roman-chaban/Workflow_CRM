"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header/Header";
import React from "react";

export const IsHeaderRender = () => {
  const pathname = usePathname();

  const isSignInPage = pathname === "/auth/signIn";
  return <>{!isSignInPage && <Header />}</>;
};
