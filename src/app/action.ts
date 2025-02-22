"use server";

import { cookies } from "next/headers";

export type Background = "dim" | "light" | "dark";
export type Color = "blue" | "yellow" | "green" | "pink" | "purple" | "orange";

export const setBackgroundOnCookie = async (bg: Background) => {
  const cookie = await cookies();
  const prefCookie = cookie.get("preferences")?.value ?? "{}";
  const parsed = JSON.parse(prefCookie);
  const newData = {
    ...parsed,
    background: bg,
  };
  cookie.set("preferences", JSON.stringify(newData), {
    httpOnly: true,
    maxAge: 999999,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
};

export const setColorCookie = async (color: Color) => {
  const cookie = await cookies();
  const prefCookie = cookie.get("preferences")?.value ?? "{}";
  const parsed = JSON.parse(prefCookie);
  const newData = {
    ...parsed,
    color,
  };
  cookie.set("preferences", JSON.stringify(newData), {
    httpOnly: true,
    maxAge: 999999,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
};
