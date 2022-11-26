import React from "react";
import TradingChartLayout from "./TradingChartLayout";
import CoinTable from "./CoinTable";
import TradingPriceTable from "./TradingPriceTable";
import TradingOrder from "./TradingOrder";
import TradingConclusionTable from "./TradingConclusionTable";

export default function TradingLayout() {
  return (
    <div className="flex">
      <div className="w-3/4">
        <div>
          <TradingChartLayout />
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
      <div className="w-1/4">
        <CoinTable />
      </div>
    </div>
  );
}
