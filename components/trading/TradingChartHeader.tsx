import React from "react";
import { TradingPair } from "../../model/trading-pair";

interface Props {
  tradingPair: TradingPair;
}

export default function TradingChartHeader({ tradingPair }: Props) {
  return (
    <div className="bg-white m-2">
      <div className="flex flex-row justify-between border-b">
        <p className="font-bold text-2xl text-gray-800 py-1 px-2 m-1">
          {tradingPair?.baseAsset.name}
        </p>
      </div>
      <div className="flex">
        <div className="w-1/2 py-1 px-2 m-1">
          <p className="font-bold text-3xl">{tradingPair?.lastPrice}</p>
          <p className="text-sm">전일대비 +0.01%</p>
        </div>
        <div className="w-1/2 py-5 flex text-sm">
          <div className="flex w-1/2 justify-between px-5">
            <div className="h-1/2">
              <p>고가</p>
              <p>저가</p>
            </div>
            <div className="h-1/2">
              <p className="text-red-600 font-bold">29,000,000</p>
              <p className="text-blue-600 font-bold">27,000,000</p>
            </div>
          </div>
          <div className="flex w-1/2 justify-between pr-5">
            <div className="h-1/2">
              <p>거래량</p>
              <p>거래대금</p>
            </div>
            <div className="h-1/2">
              <p>1,000</p>
              <p>100,000,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
