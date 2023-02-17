import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { TradingPair } from "../../model/trading-pair";

interface Props {
  setTradingPair?: (tradingPair: TradingPair) => void;
}

export default function TradingCoinTable({ setTradingPair }: Props) {
  const [tradingPairs, setTradingPairs] = useState<TradingPair[]>([]);

  const loadTradingPairs = useCallback(async () => {
    const response = await axios.get<TradingPair[]>("/tradingPairs");
    setTradingPairs(response.data);
    if (setTradingPair) setTradingPair(response.data[0]);
  }, [setTradingPair]);

  useEffect(() => {
    loadTradingPairs().then();
  }, []);

  const onClickPair = useCallback(
    (tradingPair: TradingPair) => {
      if (setTradingPair) setTradingPair(tradingPair);
    },
    [setTradingPair]
  );

  return (
    <div className="overflow-auto relative bg-white mr-2 mt-2 mb-2 h-316">
      <div className="flex justify-center border-b">
        <div className="w-11/12">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-sm"
            placeholder="코인명 검색"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
        </div>
        <div className="w-1/12 py-2.5 px-2">
          <a href="https://github.com/eunji7122">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <table className="table-auto w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-700 uppercase border-b bg-gray-100">
          <tr>
            <th scope="col" className="py-3 px-6">
              한글명
            </th>
            <th scope="col" className="py-3 px-6">
              현재가
            </th>
            <th scope="col" className="py-3 px-6">
              전일대비
            </th>
            <th scope="col" className="py-3 px-6">
              거래대금
            </th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {tradingPairs.map((tradingPair) => (
            <tr
              key={tradingPair.id}
              className="bg-white border-b"
              onClick={() => onClickPair(tradingPair)}
            >
              <td
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                {tradingPair.baseAsset.name}
                <br />
                <p className="text-xs text-gray-400">
                  {tradingPair.baseAsset.symbol}/{tradingPair.quoteAsset.symbol}
                </p>
              </td>
              <td className="py-4 px-6">{tradingPair.lastPrice}</td>
              <td className="py-4 px-6">{tradingPair.changeRate}%</td>
              <td className="py-4 px-6">{tradingPair.tradingValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
