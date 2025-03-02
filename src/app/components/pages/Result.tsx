"use client";

import Card from "@/app/components/ui/Card";
import { searchWordAtom } from "@/app/utils/atom";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

export default function Result() {
  const [serchWord] = useAtom<string>(searchWordAtom);
  useEffect(() => {
    console.log(serchWord);
  }, [serchWord]);

  return (
    <div>
      <Card />
    </div>
  );
}
