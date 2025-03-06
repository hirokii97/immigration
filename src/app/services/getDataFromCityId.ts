import city from "@/app/data/city.json";

export const getDataFromCityId = (cityId: number) => {
  const filteredData = city.filter((city) => {
    return city.id === cityId;
  });
  return filteredData;
};
