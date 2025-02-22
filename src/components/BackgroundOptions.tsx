"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import cx from "clsx";
import { CheckIcon } from "@heroicons/react/16/solid";

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
  return (
    <div className="my-4 w-full max-w-md space-y-4 border p-4">
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
  return (
    <div
      onClick={() => {
        ref.current?.click();
        ref.current?.focus();
      }}
      style={{ background: color.code }}
      className="flex items-start justify-start gap-2 rounded-lg py-4 pr-4 ring-blue-500 has-checked:ring-[3px]"
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
            "size-5 rounded-full peer-checked:bg-blue-500",
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
