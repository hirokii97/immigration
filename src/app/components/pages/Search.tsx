import FilterButtons from "@/app/components/pages/FilterButtons";
import SearchInput from "@/app/components/pages/SearchInput";
import React from "react";

export default function Search() {
  return (
    <div className="mt-10 mb-20">
      <SearchInput />
      <FilterButtons />
    </div>
  );
}
