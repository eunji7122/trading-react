import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
import { TradingPair } from "../../model/trading-pair";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { CandleData } from "../../model/Candle-data";

interface Props {
  tradingPair: TradingPair;
}

export default function TradingChart({ tradingPair }: Props) {
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const [candleList, setCandleList] = useState<CandleData[]>([]);
  const chartState = useMemo(
    () => ({
      series: [
        {
          data: candleList.map((candle) => ({
            x: new Date(candle.date),
            y: [
              candle.startPrice,
              candle.highestPrice,
              candle.lowestPrice,
              candle.endPrice,
            ],
          })),
        },
      ],
      options: {
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: "",
          align: "left",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    }),
    [candleList]
  );

  const loadCandleList = useCallback(async () => {
    const response = await axios.get<CandleData[]>("/transactions/candles", {
      params: {
        tradingPairId: 1,
        from: "2023-02-05 00:00:00",
        to: "2023-02-24 00:00:00",
      },
    });
    setCandleList(response.data);
  }, [tradingPair]);

  useEffect(() => {
    loadCandleList().then();
  }, [tradingPair]);

  return (
    <div className="bg-white m-2">
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="candlestick"
        height={350}
      />
    </div>
  );
}
