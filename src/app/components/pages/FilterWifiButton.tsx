"use client";
import { translateTagName } from "@/app/services/translateTagName";
import { sortedWiFiAtom } from "@/app/utils/atom";
import { useAtom } from "jotai";

type Props = {
  filterName: string;
};

export default function FilterWifiButton(props: Props) {
  const { filterName } = props;
  const tagName = translateTagName(filterName);
  const [sortedWiFi, setSortedWiFi] = useAtom<boolean>(sortedWiFiAtom);

  return (
    <div>
      <button
        type="button"
        className={`border bg-white hover:ring-4 hover:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
          sortedWiFi
            ? "border-blue-500 text-blue-500"
            : "text-gray-900 border-gray-200"
        }`}
        onClick={() => {
          setSortedWiFi(!sortedWiFi);
        }}
      >
        {tagName}
      </button>
    </div>
  );
}
