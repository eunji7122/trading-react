import React from "react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="flex flex-row justify-between bg-slate-50">
      <Link href="#" className="font-bold pt-4 px-2">
        Trading
      </Link>
      <div>
        <Link href="#">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Login
          </button>
        </Link>
        <Link href="#">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
