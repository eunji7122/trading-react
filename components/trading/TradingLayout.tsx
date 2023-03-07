import React, { useState } from "react";
import TradingCoinTable from "./TradingCoinTable";
import TradingPriceTable from "./TradingPriceTable";
import TradingOrder from "./TradingOrder";
import TradingConclusionTable from "./TradingConclusionTable";
import TradingChartHeader from "./TradingChartHeader";
import TradingChart from "./TradingChart";
import { TradingPair } from "../../model/trading-pair";

export default function TradingLayout() {
  const [tradingPair, setTradingPair] = useState<TradingPair>();
  return (
    <div className="mx-auto bg-gray-200 w-full h-full">
      <div className="container flex flex-row justify-between mx-auto">
        <div className="w-full items-center">
          {tradingPair != null && (
            <>
              <div>
                <TradingChartHeader tradingPair={tradingPair} />
                <TradingChart tradingPair={tradingPair} />
              </div>
              <div className="flex">
                <div className="w-1/2">
                  <TradingPriceTable tradingPair={tradingPair} />
                </div>
                <div className="w-1/2">
                  <TradingOrder tradingPair={tradingPair} />
                </div>
              </div>
              <div>
                <TradingConclusionTable />
              </div>
            </>
          )}
        </div>
        <div className="">
          <TradingCoinTable setTradingPair={setTradingPair} />
        </div>
      </div>
    </div>
  );
}
