import React from "react";
import Image from "next/image";
import AmenitiesIcon from "@/app/components/ui/AmenitiesIcon";

export default function Card(props: {
  prefecture: string;
  municipality: string;
  nightlyCost: number;
  wifiAvailable: boolean;
  displayAvailable: boolean;
}) {
  const {
    prefecture,
    municipality,
    nightlyCost,
    wifiAvailable,
    displayAvailable,
  } = props;
  return (
    <a className="block p-6 rounded-lg max-w-sm bg-white border-grey-200 shadow-sm dark:bg-gray-800">
      <div className="flex place-content-between">
        <div>
          <h3 className="text-xl font-semibold mb-1">{prefecture}</h3>
          <p className="text-sm font-semibold mb-4">{municipality}</p>
        </div>
        <div className="flex gap-2">
          {displayAvailable ? <AmenitiesIcon amenityName="display" /> : null}
          {wifiAvailable ? <AmenitiesIcon amenityName="wifi" /> : null}
        </div>
      </div>
      <div className="image">
        <Image
          className="object-cover rounded-xl w-full"
          src="/dummy1.jpg"
          alt="image"
          width={300}
          height={200}
        />
        <div></div>
        <div className="mt-2">
          <p className="text-sm">1泊あたり</p>
          <p className="text-xl font-bold">{nightlyCost.toLocaleString()}円~</p>
        </div>
      </div>
    </a>
  );
}
