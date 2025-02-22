"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchInput() {
  return (
    <div>
      <div className="relative">
        <input
          className="block w-full rounded-lg border px-10 py-2 outline-hidden"
          type="text"
        />
        <button className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer">
          <MagnifyingGlassIcon className="size-5" />
        </button>
        <button className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer">
          <XMarkIcon className="size-5" />
        </button>
      </div>
      <div>
        <small>Error. Username is required</small>
      </div>
    </div>
  );
}
