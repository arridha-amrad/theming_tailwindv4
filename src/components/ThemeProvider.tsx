"use client";

import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      const storedBackground = localStorage.getItem("background");
      if (!storedBackground) {
        localStorage.setItem("background", "dark");
      }
    }
  }, []);
  return children;
}
