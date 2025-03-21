import { filterData } from "@/app/services/filterData";

export const getResultData = (
  searchWord: string,
  sortedWiFi: boolean,
  sortedDisplay: boolean
) => {
  const resultData = filterData(searchWord,sortedWiFi,sortedDisplay);
  return resultData;
};
