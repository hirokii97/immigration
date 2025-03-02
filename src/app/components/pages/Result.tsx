"use client";

import Card from "@/app/components/ui/Card";
import { searchWordAtom } from "@/app/utils/atom";
import { useAtom } from "jotai";

export default function Result() {
  const [searchWord] = useAtom<string>(searchWordAtom);

  return (
    <div>
      <Card />
      <Card />
    </div>
  );
}
