"use client";

import React from "react";
import Image from "next/image";
import { getDataFromCityId } from "@/app/services/getDataFromCityId";
type Props = {
  params: { id: number };
};

export default function page({ params }: Props) {
  const data = getDataFromCityId(params.id);
  console.log(data);

  return (
    <div>
      {/* 写真 */}
      <Image
        className="rounded-xl"
        src="/dummy1.jpg"
        alt="image"
        width={300}
        height={200}
      />
      {/* こんなとこ */}
      <div>
        <h3>{}ってこんなとこ</h3>
      </div>
      {/* 表 */}
      <div></div>
      {/* おすすめスポット */}
      <div>
        <h3>{}のおすすめスポット</h3>
      </div>
    </div>
  );
}
