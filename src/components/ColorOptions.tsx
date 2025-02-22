"use client";

import { Color, setColorCookie } from "@/app/action";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const colors = [
  {
    name: "blue",
    code: "#1d9bf0",
  },
  {
    name: "yellow",
    code: "#ffd400",
  },
  {
    name: "pink",
    code: "#f91880",
  },
  {
    name: "purple",
    code: "#7856ff",
  },
  {
    name: "orange",
    code: "#ff7a00",
  },
  {
    name: "green",
    code: "#00ba7c",
  },
];

export default function ColorOptions() {
  const [selectedColor, setSelectedColor] = useState("");
  useEffect(() => {
    const color = localStorage.getItem("color") ?? "blue";
    setSelectedColor(color);
  }, []);
  return (
    <div className="border-skin-border rounded-skin w-full max-w-md space-y-4 border p-4">
      <h1 className="text-2xl font-bold">Color</h1>
      <div className="flex justify-between gap-2">
        {colors.map((color) => (
          <Option
            key={color.name}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}
function Option({
  color,
  selectedColor,
  setSelectedColor,
}: {
  color: (typeof colors)[number];
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}) {
  const ref = useRef<HTMLInputElement | null>(null);
  const onClick = async () => {
    ref.current?.click();
    ref.current?.focus();
    localStorage.setItem("color", color.name);
    await setColorCookie(color.name as Color);
  };
  return (
    <div onClick={onClick} className="group relative size-8 cursor-pointer">
      <div
        style={{ background: color.code }}
        className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-200 ease-linear group-hover:opacity-20"
      />
      <input
        ref={ref}
        checked={color.name === selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
        value={color.name}
        style={{ background: color.code }}
        type="radio"
        className="peer aspect-square w-full appearance-none rounded-full outline-hidden"
      />
      <CheckIcon className="absolute top-1/2 left-1/2 z-50 size-5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
    </div>
  );
}
