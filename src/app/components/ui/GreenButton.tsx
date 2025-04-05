import React from "react";

export default function GreenButton(props: { text: string }) {
  const { text } = props;
  return (
    <div>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-16 py-4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        {text}
      </button>
    </div>
  );
}
