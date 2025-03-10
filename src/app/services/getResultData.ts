import { filterData } from "@/app/services/filterData";

export const getResultData = (searchWord: string) => {
  const resultData = filterData(searchWord);
  return resultData;
};
