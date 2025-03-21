import { CityType } from "@/app/types/city";
import { atom } from "jotai";
import city from "@/app/data/city.json";

// 検索ワード
export const searchWordAtom = atom<string>("");

// Wi-Fi絞り込み
export const sortedWiFiAtom = atom<boolean>(false);

// ディスプレイ絞り込み
export const sortedDisplayAtom = atom<boolean>(false);

// 自治体データ（テスト用）
export const resultsAtom = atom<CityType[]>(city);
