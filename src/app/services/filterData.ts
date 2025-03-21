import city from "@/app/data/city.json";

export const filterData = (
  searchWord: string,
  sortedWiFi: boolean,
  sortedDisplay: boolean
) => {
  const filteredData = city.filter((city) => {
    const matchesSearchWord =
      city.prefecture_hiragana.includes(searchWord) ||
      city.municipality_hiragana.includes(searchWord) ||
      city.prefecture.includes(searchWord) ||
      city.municipality.includes(searchWord);
    const matchesWifi = sortedWiFi ? city.wifiAvailable : true;
    const matchesDisplay = sortedDisplay ? city.displayAvailable : true;
    return matchesSearchWord && matchesWifi && matchesDisplay;
  });
  return filteredData;
};
