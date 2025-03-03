import React from "react";
import Image from "next/image";

export default function Card(props: {
  prefecture: string;
  municipality: string;
  description: string;
}) {
  const { prefecture, municipality, description } = props;
  return (
    <a className="block p-6 rounded-lg max-w-sm bg-wthite border-grey-200 shadow-sm dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-1">{prefecture}</h3>
      <p className="text-sm font-semibold mb-4">{municipality}</p>
      <div className="image">
        <Image
          className="object-cover rounded-xl w-full"
          src="/dummy1.jpg"
          alt="image"
          width={300}
          height={200}
        />
      </div>
      <p className="text-sm mt-4">{description}</p>
    </a>
  );
}
