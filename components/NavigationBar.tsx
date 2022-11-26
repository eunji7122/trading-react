import React from "react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="flex flex-row justify-between bg-slate-50">
      <ul className="flex">
        <li className="mr-6 pt-4 px-2">
          <Link href="/trading" className="font-bold">
            거래소
          </Link>
        </li>
        <li className="mr-6 pt-4 px-2">
          <Link href="/trading" className="font-bold">
            투자내역
          </Link>
        </li>
      </ul>
      <div>
        <Link href="#">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Login
          </button>
        </Link>
        <Link href="#">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}
