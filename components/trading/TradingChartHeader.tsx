import React, { useEffect, useState } from "react";
import { TradingPair } from "../../model/trading-pair";
import { useAppSelector } from "../../app/store";

interface Props {
  tradingPair: TradingPair;
}

export default function TradingChartHeader({ tradingPair }: Props) {
  const [useStateTradingPair, setUseStateTradingPair] = useState<TradingPair>();

  const findTradingPair = useAppSelector((state) =>
    state.trading.tradingPairs.find((x) => x.id == tradingPair.id)
  );

  useEffect(() => {
    setUseStateTradingPair(tradingPair);
  }, [tradingPair]);

  useEffect(() => {
    setUseStateTradingPair(findTradingPair);
  }, [findTradingPair]);

  return (
    <div className="bg-white m-2">
      <div className="flex flex-row justify-between border-b">
        <p className="font-bold text-2xl text-gray-800 py-1 px-2 m-1">
          {useStateTradingPair?.baseAsset.name}
        </p>
      </div>
      <div className="flex">
        <div className="w-1/2 py-1 px-2 m-1">
          <p className="font-bold text-3xl">{useStateTradingPair?.lastPrice}</p>
          <p className="text-sm">전일대비 {useStateTradingPair?.changeRate}%</p>
        </div>
        <div className="w-1/2 py-5 flex text-sm">
          <div className="flex w-1/2 justify-between px-5">
            <div className="h-1/2">
              <p>고가</p>
              <p>저가</p>
            </div>
            <div className="h-1/2">
              <p className="text-red-600 font-bold">
                {useStateTradingPair?.highestPrice}
              </p>
              <p className="text-blue-600 font-bold">
                {useStateTradingPair?.lowestPrice}
              </p>
            </div>
          </div>
          <div className="flex w-1/2 justify-between pr-5">
            <div className="h-1/2">
              <p>거래량</p>
              <p>거래대금</p>
            </div>
            <div className="h-1/2">
              <p>{useStateTradingPair?.tradingAmount}</p>
              <p>{useStateTradingPair?.tradingValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
