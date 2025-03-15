import React from "react";
import { getDataFromCityId } from "@/app/services/getDataFromCityId";
import Table from "@/app/city/[cityId]/_componets/Table";
import Tag from "@/app/components/ui/Tag";
import SliderImage from "@/app/components/ui/SliderImage/SliderImage";
type Props = {
  params: Promise<{ cityId: string }>;
};

export default async function page({ params }: Props) {
  const { cityId } = await params;
  const city = getDataFromCityId(cityId)[0];

  const tagsData = [
    ...city.touristAttractions,
    city.additionalInfo.events,
    city.additionalInfo.localSpecialty,
  ];

  const images = [...city.images];

  return (
    <div className="max-w-[980] m-auto mt-5">
      <h2 className="text-4xl font-bold mt-3 text-center">
        {city.prefecture}
        {city.municipality}
      </h2>
      <div className="mt-6">
        <SliderImage images={images} />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">
          {city.municipality}ってどんなとこ？
        </h3>
        <p className="mt-1 leading-8 text-xl">{city.description}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">基本情報</h3>
        <Table city={city} />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">
          {city.municipality}のおすすめスポット
        </h3>
        <div className="flex gap-2 mt-1">
          {tagsData.map((tagData) => (
            <div key={tagData}>
              <Tag tagName={tagData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
