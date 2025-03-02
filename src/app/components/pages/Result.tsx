"use client";

import Card from "@/app/components/ui/Card";
import { searchWordAtom } from "@/app/utils/atom";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

export default function Result() {
  const [searchWord] = useAtom<string>(searchWordAtom);
  useEffect(() => {
    console.log(searchWord);
  }, [searchWord]);

  return (
    <div>
      <Card />
      <Card />
    </div>
  );
}
