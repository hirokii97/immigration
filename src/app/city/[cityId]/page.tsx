import React from "react";
import { getDataFromCityId } from "@/app/services/getDataFromCityId";
import Tag from "@/app/components/ui/Tag";
import SliderImage from "@/app/components/ui/SliderImage";
import Table from "@/app/city/[cityId]/components/Table";
import DetailButton from "@/app/city/[cityId]/components/DetailButton";
type Props = {
  params: Promise<{ cityId: string }>;
};

export default async function page({ params }: Props) {
  const { cityId } = await params;
  const cityData = await getDataFromCityId(cityId);
  const city = cityData[0];
  const touristAttractions = city?.touristAttractions.split(",");

  const tagsData = [
    ...touristAttractions,
    city?.additionalInfoEvents,
    city?.additionalInfoLocalSpecialty,
  ];

  const images = city?.images;

  return (
    <div className="max-w-[980] m-auto mt-5">
      <h2 className="text-4xl font-bold mt-3 text-center">
        {city?.prefecture}
        {city?.municipality}
      </h2>
      <div className="mt-6">
        <SliderImage images={images} />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">
          {city?.municipality}ってどんなとこ？
        </h3>
        <p className="leading-8 text-xl">{city?.description}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">基本情報</h3>
        <Table city={city} />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">
          {city.municipality}のおすすめスポット
        </h3>
        <div className="flex gap-2 mt-1">
          {tagsData.map((tagData, index) => (
            <div key={index}>
              <Tag tagName={tagData} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <DetailButton text={"詳細はこちら"} />
      </div>
    </div>
  );
}
