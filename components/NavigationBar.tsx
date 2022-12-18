import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../features/authSlice";
import { useRouter } from "next/router";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);
  const router = useRouter();

  const onClickInvestments = () => {
    if (!token) {
      alert("로그인이 필요한 페이지 입니다.");
      router.push("/auth/login");
    }
  };

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
              <Link
                href="/investments"
                onClick={onClickInvestments}
                className="font-bold text-white"
              >
                투자내역
              </Link>
            </li>
          </ul>
          <div className="py-2 px-4 m-2">
            {!token ? (
              <Link
                href="/auth/login"
                className="font-medium text-white hover:text-gray-300 px-8"
              >
                로그인
              </Link>
            ) : (
              <Link
                href="/trading"
                onClick={() => dispatch(setToken(""))}
                className="font-medium text-white hover:text-gray-300 px-8"
              >
                로그아웃
              </Link>
            )}

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
