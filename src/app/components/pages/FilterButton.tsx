"use client";
import { translateTagName } from "@/app/services/translateTagName";
import { sortedDisplayAtom, sortedWiFiAtom } from "@/app/utils/atom";
import { useAtom } from "jotai";
import React, { useState } from "react";

type Props = {
  filterName: string;
};

export default function FilterButton(props: Props) {
  const { filterName } = props;
  const tagName = translateTagName(filterName);

  const [isAvailableWiFi, setIsAvailableWiFi] =
    useAtom<boolean>(sortedWiFiAtom);
  const [isAvailableDisplay, setIsAvailableDisplay] =
    useAtom<boolean>(sortedDisplayAtom);

  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <div>
      <button
        type="button"
        className={`border bg-white hover:ring-4 hover:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
          isClicked
            ? "border-blue-500 text-blue-500"
            : "text-gray-900 border-gray-200"
        }`}
        onClick={() => {
          setIsClicked(!isClicked),
            filterName === "wifi"
              ? setIsAvailableWiFi(!isAvailableWiFi)
              : setIsAvailableDisplay(!isAvailableDisplay);
        }}
      >
        {tagName}
      </button>
    </div>
  );
}
