import React from "react";

export default function Tag(props: { tagName: string }) {
  const { tagName } = props;
  return (
    <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
      {tagName}
    </span>
  );
}
