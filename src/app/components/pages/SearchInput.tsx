"use client";

import { searchWordAtom } from "@/app/utils/atom";
import { useAtom } from "jotai";

export default function SearchInput() {
  const [searchWord, setSearchWord] = useAtom<string>(searchWordAtom);

  return (
    <div className="relative w-200 m-auto">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="都道府県・市町村を入力してみよう！"
        required
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </div>
  );
}
