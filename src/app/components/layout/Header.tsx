import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full h-15 bg-white/98 flex items-center pl-10">
      <Link href="/" className="flex max-w-[980]">
        <Image
          className="rounded-xl object-cover"
          src="/icon.svg"
          alt="image"
          width={32}
          height={32}
        />
        <h1 className="font-bold text-xl pl-3">そうだ、移住体験にいこう。</h1>
      </Link>
    </header>
  );
}
