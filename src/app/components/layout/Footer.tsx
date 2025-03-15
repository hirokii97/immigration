import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-15 flex items-center justify-end pl-10 border-t-2 border-gray-100 mt-10">
      <Link href="/" className="block flex max-w-[980]">
        <Image
          className="rounded-xl object-cover"
          src="/icon.svg"
          alt="image"
          width={32}
          height={32}
        />
        <h1 className="font-bold text-xl pl-3">そうだ、移住体験にいこう。</h1>
      </Link>
    </footer>
  );
}
