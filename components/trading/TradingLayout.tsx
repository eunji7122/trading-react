import React from "react";
import CoinTable from "./CoinTable";
import TradingPriceTable from "./TradingPriceTable";
import TradingOrder from "./TradingOrder";
import TradingConclusionTable from "./TradingConclusionTable";
import TradingChartHeader from "./TradingChartHeader";
import TradingChart from "./TradingChart";

export default function TradingLayout() {
  return (
    <div className="mx-auto bg-gray-200 w-full h-full">
      <div className="container flex flex-row justify-between mx-auto">
        <div className="w-full items-center">
          <div>
            <TradingChartHeader />
            <TradingChart />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <TradingPriceTable />
            </div>
            <div className="w-1/2">
              <TradingOrder />
            </div>
          </div>
          <div>
            <TradingConclusionTable />
          </div>
        </div>
        <div className="">
          <CoinTable />
        </div>
      </div>
    </div>
  );
}
