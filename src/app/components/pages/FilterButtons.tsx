import FilterButton from "@/app/components/pages/FilterButton";
import React from "react";

export default function FilterButtons() {
  return (
    <div className="w-200 m-auto mt-5 flex">
      <FilterButton filterName={"wifi"} />
      <FilterButton filterName={"display"} />
    </div>
  );
}
