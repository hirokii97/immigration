import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translateTagName } from "@/app/services/translateTagName";
import { translateIconName } from "@/app/services/translateIconName";

export default function AmenitiesIcon(props: { amenityName: string }) {
  const { amenityName } = props;
  const tagName = translateTagName(amenityName);
  const iconName = translateIconName(amenityName);
  return (
    <div className="flex flex-col items-center">
      {/* todo:iconがない場合も考慮する */}
      <FontAwesomeIcon icon={iconName!} />
      <p className="text-xs mt-1">{tagName}</p>
    </div>
  );
}
