"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchInput() {
  return (
    <div>
      <div className="relative">
        <input
          className="border-skin-border focus:border-skin-primary/80 ring-skin-primary/30 focus:ring-offset-background block w-full rounded-lg border px-10 py-2 outline-hidden focus:ring-2 focus:ring-offset-2"
          type="text"
        />
        <button className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer outline-none">
          <MagnifyingGlassIcon className="text-skin-muted size-5" />
        </button>
        <button className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer outline-none">
          <XMarkIcon className="text-skin-muted size-5" />
        </button>
      </div>
      <div>
        <small className="text-skin-error">Error. Username is required</small>
      </div>
    </div>
  );
}
