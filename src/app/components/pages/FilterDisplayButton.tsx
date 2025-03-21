"use client";
import { translateTagName } from "@/app/services/translateTagName";
import { sortedDisplayAtom } from "@/app/utils/atom";
import { useAtom } from "jotai";

type Props = {
  filterName: string;
};

export default function FilterDisplayButton(props: Props) {
  const { filterName } = props;
  const tagName = translateTagName(filterName);

  const [sortedDisplay, setSortedDisplay] =
    useAtom<boolean>(sortedDisplayAtom);

  return (
    <div>
      <button
        type="button"
        className={`border bg-white hover:ring-4 hover:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
          sortedDisplay
            ? "border-blue-500 text-blue-500"
            : "text-gray-900 border-gray-200"
        }`}
        onClick={() => {
          setSortedDisplay(!sortedDisplay);
        }}
      >
        {tagName}
      </button>
    </div>
  );
}
