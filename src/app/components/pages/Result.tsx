"use client";

import Card from "@/app/components/ui/Card";
import Margin from "@/app/components/ui/Margin";
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
    <div className="flex flex-wrap gap-6">
      {results.map((result) => (
        <div key={result.id}>
          <Card
            key={result.id}
            prefecture={result.prefecture}
            municipality={result.municipality}
            description={result.description}
          />
        </div>
      ))}
    </div>
  );
}
