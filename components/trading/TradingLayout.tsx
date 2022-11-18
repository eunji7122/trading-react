import React from "react";
import TradingChartLayout from "./TradingChartLayout";

export default function TradingLayout() {
  return (
    <>
      <div className="w-2/3">
        <TradingChartLayout />
      </div>
      <div className="w-1/3"></div>
    </>
  );
}
