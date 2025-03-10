import { CityType } from "@/app/types/city";
import React from "react";

export default function Table(props: { city: CityType }) {
  const { city } = props;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              自治体名
            </th>
            <td className="px-6 py-4">{city.prefecture + city.municipality}</td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              平均気温
            </th>
            <td className="px-6 py-4">{city.averageTemperature}度</td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              １泊あたりの料金
            </th>
            <td className="px-6 py-4">
              {city.nightlyCost.toLocaleString()}円〜
            </td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Wi-Fi
            </th>
            <td className="px-6 py-4">
              {city.wifiAvailable ? "あり" : "なし"}
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="w-24 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ディスプレイ
            </th>
            <td className="px-6 py-4">
              {city.displayAvailable ? "あり" : "なし"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
