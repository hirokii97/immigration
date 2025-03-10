import city from "@/app/data/city.json";

export const getDataFromCityId = (cityId: string) => {
  const filteredData = city.filter((city) => {
    return city.id === cityId;
  });
  return filteredData;
};
