"use client";

import Card from "@/app/components/ui/Card";
import { getResultData } from "@/app/services/getResultData";
import { CityType } from "@/app/types/city";
import {
  sortedDisplayAtom,
  sortedWiFiAtom,
  resultsAtom,
  searchWordAtom,
} from "@/app/utils/atom";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Result() {
  const [searchWord] = useAtom<string>(searchWordAtom);
  const [sortedWiFi] = useAtom<boolean>(sortedWiFiAtom);
  const [sortedDisplay] = useAtom<boolean>(sortedDisplayAtom);
  const [results, setResult] = useAtom<CityType[]>(resultsAtom);

  //   検索結果を出力する関数
  useEffect(() => {
    const results = getResultData(
      searchWord,
      sortedWiFi,
      sortedDisplay
    );
    setResult(results);
  }, [searchWord, sortedWiFi, sortedDisplay]);
  return (
    <div className="flex flex-wrap gap-8 mt-12 place-content-around">
      {results.map((result) => (
        <div key={result.id}>
          <Card
            key={result.id}
            images={result.images}
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
