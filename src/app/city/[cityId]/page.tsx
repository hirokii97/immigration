import React from "react";
import Image from "next/image";
import { getDataFromCityId } from "@/app/services/getDataFromCityId";
import Table from "@/app/city/[cityId]/_componets/Table";
type Props = {
  params: Promise<{ cityId: string }>;
};

export default async function page({ params }: Props) {
  const { cityId } = await params;
  const city = getDataFromCityId(cityId)[0];

  return (
    <div>
      <div>
        <Image
          className="rounded-xl object-cover"
          src="/dummy1.jpg"
          alt="image"
          width={300}
          height={200}
        />
      </div>
      {/* こんなとこ */}
      <div>
        <h3>{city.municipality}市ってどんなとこ？</h3>
        <p>{city.description}</p>
      </div>
      {/* 表 */}
      <Table city={city} />
      {/* おすすめスポット */}
      <div>
        <h3>{city.municipality}のおすすめスポット</h3>
      </div>
    </div>
  );
}
