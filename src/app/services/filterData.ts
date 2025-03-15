import city from "@/app/data/city.json";

export const filterData = (searchWord: string) => {
  const filteredData = city.filter((city) => {
    return (
      city.prefecture_hiragana.includes(searchWord) ||
      city.municipality_hiragana.includes(searchWord) ||
      city.prefecture.includes(searchWord) ||
      city.municipality.includes(searchWord)
    );
  });
  return filteredData;
};
