"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Account() {
  const { data: session } = useSession();
  const isLogin = session ? true : false;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLogin ? (
        <>
          <div>
            <Image
              className="rounded-xl"
              src={session?.user?.image ?? "/gust_icon.png"}
              alt="image"
              width={32}
              height={32}
            />
          </div>
          <h1 className="text-2xl font-bold my-4">
            {`こんにちは、${session?.user?.name}さん`}
          </h1>
          <div>
            <div className="flex">
              <p>登録メールアドレス：</p>
              <p>{session?.user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600/60"
          >
            ログアウト
          </button>
        </>
      ) : (
        <>
          <div>
            <Image
              className="rounded-xl"
              src="/gust_icon.png"
              alt="image"
              width={32}
              height={32}
            />
          </div>
          <h1 className="text-2xl font-bold my-4">こんにちは、ゲストさん</h1>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Googleでログイン
          </button>
        </>
      )}
    </div>
  );
}
