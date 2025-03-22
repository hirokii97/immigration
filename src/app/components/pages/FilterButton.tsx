"use client";
import { translateTagName } from "@/app/services/translateTagName";
import { sortedDisplayAtom, sortedWiFiAtom } from "@/app/utils/atom";
import { useAtom } from "jotai";

type Props = {
  filterName: string;
};

export default function FilterButton(props: Props) {
  const { filterName } = props;
  const getAtom = (filterName: string) => {
    switch (filterName) {
      case "wifi":
        return sortedWiFiAtom;
      case "display":
        return sortedDisplayAtom;
    }
  };
  const filteredTagAtom = getAtom(filterName);
  const tagName = translateTagName(filterName);
  const [filteredTag, setFilteredTag] = useAtom<boolean>(filteredTagAtom!);

  return (
    <div>
      <button
        type="button"
        className={`border bg-white hover:ring-4 hover:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
          filteredTag
            ? "border-blue-500 text-blue-500"
            : "text-gray-900 border-gray-200"
        }`}
        onClick={() => {
          setFilteredTag(!filteredTag);
        }}
      >
        {tagName}
      </button>
    </div>
  );
}
