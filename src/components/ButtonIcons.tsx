"use client";

import {
  ArrowTopRightOnSquareIcon,
  CameraIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";

export default function ButtonIcons() {
  return (
    <div className="flex w-full items-center gap-2">
      <ButtonIcon>
        <ArrowTopRightOnSquareIcon className="size-5" />
      </ButtonIcon>
      <ButtonIcon>
        <CameraIcon className="size-5" />
      </ButtonIcon>
      <ButtonIcon>
        <FolderArrowDownIcon className="size-5" />
      </ButtonIcon>
    </div>
  );
}

const ButtonIcon = ({ children }: { children: ReactNode }) => {
  return (
    <button className="text-skin-primary hover:bg-skin-primary/20 focus:bg-skin-primary/20 flex size-9 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in outline-none">
      {children}
    </button>
  );
};
