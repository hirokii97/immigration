import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <a className="block p-6 rounded-lg max-w-sm bg-wthite border-grey-200 shadow-sm dark:bg-gray-800">
      <p className="text-xl font-semibold mb-4">北海道****市</p>
      <div className="image">
        <Image className="object-cover rounded-xl w-full" src="/dummy1.jpg" alt="image" width={300} height={200} />
      </div>
      <p className="text-sm mt-4">
      この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
      </p>
    </a>
  );
}
