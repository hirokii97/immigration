import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay, faWifi } from "@fortawesome/free-solid-svg-icons";

export default function AmenitiesIcon(props: { amenityName: string }) {
  const { amenityName } = props;
  return (
    <div className="flex flex-col items-center">
      <FontAwesomeIcon icon={amenityName === "display" ? faDisplay : faWifi} />
      <p className="text-xs mt-1">
        {amenityName === "display" ? "ディスプレイ" : "WiFi"}
      </p>
    </div>
  );
}
