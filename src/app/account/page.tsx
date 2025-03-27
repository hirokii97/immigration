"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Account() {
  const { data: session } = useSession();
  const isLogin = session ? true : false;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLogin ? (
        <>
          <h1 className="text-2xl font-bold mb-4">
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
          <h1 className="text-2xl font-bold mb-4">
            ログインしてませんね？
          </h1>
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
