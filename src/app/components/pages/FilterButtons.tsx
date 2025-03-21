import FilterDisplayButton from "@/app/components/pages/FilterDisplayButton";
import FilterWifiButton from "@/app/components/pages/FilterWifiButton";
import React from "react";

export default function FilterButtons() {
  return (
    <div className="w-200 m-auto mt-5 flex">
      <FilterWifiButton filterName={"wifi"} />
      <FilterDisplayButton filterName={"display"} />
    </div>
  );
}
