"use client";

import { useState, useEffect } from "react";

type IsMatch = boolean;
type MediaQuery = string;

export default function useMediaQuery(mediaQuery: MediaQuery): IsMatch {
  const [isMatch, setIsMatch] = useState<IsMatch>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    setIsMatch(mediaQueryList.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsMatch(e.matches);

    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [mediaQuery]);

  return isMatch;
}
