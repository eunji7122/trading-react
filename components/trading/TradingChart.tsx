import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
import { TradingPair } from "../../model/trading-pair";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { CandleData } from "../../model/candle-data";

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
    const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간
    const d = new Date();
    const date = new Date(d.getTime() + TIME_ZONE).toISOString().split("T")[0];
    const time = d.toTimeString().split(" ")[0];
    const now = date + " " + time;

    const response = await axios.get<CandleData[]>("/transactions/candles", {
      params: {
        tradingPairId: 1,
        from: "2023-02-05 00:00:00",
        to: now,
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
