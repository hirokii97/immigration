import { CityType } from "@/app/types/city";
import { atom } from "jotai";
import city from "@/app/data/city.json";

export const searchWordAtom = atom<string>("");
export const resultsAtom = atom<CityType[]>(city);
