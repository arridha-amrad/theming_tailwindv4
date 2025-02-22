"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import cx from "clsx";
import { CheckIcon } from "@heroicons/react/16/solid";
import { Background, setBackgroundOnCookie } from "@/app/action";

const bgColors = [
  {
    name: "Light",
    code: "#fff",
  },
  {
    name: "Dim",
    code: "#15202b",
  },
  {
    name: "Dark",
    code: "#000",
  },
];

export default function BackgroundOptions() {
  const [bg, setBg] = useState("");

  useEffect(() => {
    const background = localStorage.getItem("background");
    if (!background) {
      const isPreferDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      if (isPreferDark) {
        setBg("dark");
      } else {
        setBg("light");
      }
    } else {
      setBg(background);
    }
  }, []);

  return (
    <div className="rounded-skin border-skin-border my-4 w-full max-w-md space-y-4 border p-4">
      <h1 className="text-2xl font-bold">Background</h1>
      <div className="grid w-full grid-cols-3 gap-4">
        {bgColors.map((color) => (
          <Option bg={bg} setBg={setBg} color={color} key={color.code} />
        ))}
      </div>
    </div>
  );
}

const Option = ({
  color,
  bg,
  setBg,
}: {
  color: (typeof bgColors)[number];
  bg: string;
  setBg: Dispatch<SetStateAction<string>>;
}) => {
  const id = `bg-${color.name}`;
  const ref = useRef<HTMLInputElement | null>(null);

  const onClick = async () => {
    ref.current?.click();
    ref.current?.focus();
    localStorage.setItem("background", color.name.toLowerCase());
    await setBackgroundOnCookie(color.name.toLowerCase() as Background);
  };

  return (
    <div
      onClick={onClick}
      style={{ background: color.code }}
      className="border-skin-border ring-skin-primary flex items-start justify-start gap-2 rounded-lg border py-4 pr-4 has-checked:ring-[3px]"
    >
      <div className="relative grid place-items-center px-4">
        <input
          ref={ref}
          id={id}
          type="radio"
          className={cx(
            "peer col-start-1 row-start-1 size-5 shrink-0 appearance-none rounded-full border-2 outline-hidden",
            color.name === "Light" && "border-slate-300",
            color.name !== "Light" && "border-slate-700",
          )}
          onChange={(e) => setBg(e.target.value)}
          checked={bg === color.name.toLowerCase()}
          value={color.name.toLowerCase()}
        />
        <div
          className={cx(
            "pointer-events-none",
            "col-start-1 row-start-1",
            "peer-checked:bg-skin-primary size-5 rounded-full",
            "peer-checked:peer-disabled:bg-gray-400",
          )}
        />
        <CheckIcon className="absolute top-1/2 size-4 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
      </div>
      <label
        htmlFor={id}
        style={{ color: color.name === "Light" ? "#000" : "#fff" }}
        className={cx("text-start font-semibold hover:cursor-pointer", {})}
      >
        {color.name}
      </label>
    </div>
  );
};
