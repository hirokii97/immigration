"use client";

import Card from "@/app/components/ui/Card";
import { getResultData } from "@/app/services/getResultData";
import { CityType } from "@/app/types/city";
import { resultsAtom, searchWordAtom } from "@/app/utils/atom";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Result() {
  const [searchWord] = useAtom<string>(searchWordAtom);
  const [results, setResult] = useAtom<CityType[]>(resultsAtom);

  //   検索結果を出力する関数
  useEffect(() => {
    const results = getResultData(searchWord);
    setResult(results);
  }, [searchWord]);
  return (
    <div className="flex flex-wrap gap-12 mt-12">
      {results.map((result) => (
        <div key={result.id}>
          <Card
            key={result.id}
            cityId={result.id}
            prefecture={result.prefecture}
            municipality={result.municipality}
            nightlyCost={result.nightlyCost}
            wifiAvailable={result.wifiAvailable}
            displayAvailable={result.displayAvailable}
          />
        </div>
      ))}
    </div>
  );
}
