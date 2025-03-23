"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const isLogin = session ? true : false;
  return (
    <header className="sticky top-0 z-10 w-full h-15 bg-white/98 flex items-center px-10 justify-between">
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
      <div className="flex items-center gap-3">
        <div>
          {isLogin ? (
            <button onClick={() => signOut()}>ログアウト</button>
          ) : (
            <button onClick={() => signIn("google", {}, { prompt: "login" })}>
              Googleでログイン
            </button>
          )}
        </div>
        <div>
          <Image
            width={32}
            height={32}
            src={session?.user?.image ?? "/gust_icon.png"}
            alt="アイコン"
            style={{ borderRadius: "50px" }}
          />
        </div>
      </div>
    </header>
  );
}
