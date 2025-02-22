"use server";

import { cookies } from "next/headers";

type Background = "dim" | "light" | "dark";

export const setBackgroundCookie = async (bg: Background) => {
  const cookie = await cookies();
  cookie.set("data-bg", bg, {
    httpOnly: true,
    maxAge: 999999,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
};

type Color = "blue" | "yellow" | "green";

export const setColorCookie = async (color: Color) => {
  const cookie = await cookies();
  cookie.set("data-color", color, {
    httpOnly: true,
    maxAge: 999999,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
};
