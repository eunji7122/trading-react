import TradingCoinTable from "../trading/TradingCoinTable";
import React from "react";
import Holdings from "./Holdings";

export default function InvestmentDetailsLayout() {
  return (
    <div className="mx-auto bg-gray-200 w-full h-full">
      <div className="container flex flex-row justify-between mx-auto">
        <div className="overflow-x-auto relative bg-white mr-2 ml-2 mb-2 mt-2 w-full">
          <div className="w-full items-center">
            <div className="border-b h-12">
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                  <a
                    href="#"
                    className={
                      "inline-block py-3 px-20 text-gray-600 rounded-t-lg border-b-2 border-gray-600 active font-bold"
                    }
                  >
                    보유자산
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className={
                      "inline-block py-3 px-20 rounded-t-lg border-b-2 border-transparent text-gray-600"
                    }
                  >
                    거래내역
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className={
                      "inline-block py-3 px-20 rounded-t-lg border-b-2 border-transparent text-gray-600"
                    }
                  >
                    미체결
                  </a>
                </li>
              </ul>
            </div>
            <Holdings />
          </div>
        </div>
        <div className="">
          <TradingCoinTable />
        </div>
      </div>
    </div>
  );
}
