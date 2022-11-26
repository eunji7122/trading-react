import React from "react";
import TradingChartHeader from "./TradingChartHeader";
import TradingChart from "./TradingChart";

export default function TradingChartLayout() {
  return (
    <div className="bg-gray-400 w-full h-full">
      <TradingChartHeader />
      <TradingChart />
    </div>
  );
}
