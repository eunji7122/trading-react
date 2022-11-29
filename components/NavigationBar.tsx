import React from "react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="max-w-8xl mx-auto">
      <nav className="border-gray-200 px-2 sm:px-4 py-1 bg-gray-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <ul className="flex">
            <li className="py-2 px-4 m-2">
              <Link href="/trading" className="font-bold text-white text-2xl">
                거래소
              </Link>
            </li>
            <li className="py-3 px-4 m-2">
              <Link href="/trading" className="font-bold text-white">
                투자내역
              </Link>
            </li>
          </ul>
          <div className="py-2 px-4 m-2">
            <Link
              href="/auth/login"
              className="font-medium text-white hover:text-gray-300 px-8"
            >
              로그인
            </Link>
            <Link
              href="/auth/register"
              className="font-medium text-white hover:text-gray-300"
            >
              회원가입
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
