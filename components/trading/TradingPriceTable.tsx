import { useCallback, useEffect, useState } from "react";
import { OrderGathering } from "../../model/order-gathering";
import axios from "axios";
import { TradingPair } from "../../model/trading-pair";

interface Props {
  tradingPair: TradingPair;
}

export default function TradingPriceTable({ tradingPair }: Props) {
  const [buyOrderGathering, setBuyOrderGathering] = useState<OrderGathering[]>(
    []
  );
  const [sellOrderGathering, setSellOrderGathering] = useState<
    OrderGathering[]
  >([]);

  const loadOrderGatherings = useCallback(async () => {
    const buyOrders = await axios.get<OrderGathering[]>(
      "/orders/gathering/buy",
      { params: { tradingPairId: tradingPair.id } }
    );
    const sellOrders = await axios.get<OrderGathering[]>(
      "/orders/gathering/sell",
      { params: { tradingPairId: tradingPair.id } }
    );
    setBuyOrderGathering(buyOrders.data);
    setSellOrderGathering(sellOrders.data);
  }, [tradingPair]);

  useEffect(() => {
    loadOrderGatherings().then();
  }, [tradingPair]);

  return (
    <div className="overflow-x-auto relative bg-white mr-2 ml-2 mb-2 h-100">
      <div className="border-b">
        <p className="py-1 px-2 m-1 text-gray-900 font-bold">모아보기</p>
      </div>
      <table className="table-auto w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-700 uppercase border-b bg-gray-100">
          <tr>
            <th scope="col" className="py-3 px-6">
              가격
            </th>
            <th scope="col" className="py-3 px-6">
              수량
            </th>
          </tr>
        </thead>
        <tbody>
          {sellOrderGathering.map((order) => (
            <tr key={order.price} className="bg-white border-b bg-blue-50">
              <td className="py-4 px-6 text-gray-600">
                {order.price}&emsp; +
                {Math.round(
                  ((order.price - tradingPair.lastPrice) /
                    tradingPair.lastPrice) *
                    100 *
                    100
                ) / 100}
              </td>
              <td className="py-4 px-6 text-gray-600">{order.amount}</td>
            </tr>
          ))}
          {buyOrderGathering.map((order) => (
            <tr key={order.price} className="bg-white border-b bg-red-50">
              <td className="py-4 px-6 text-gray-600">
                {order.price}&emsp;&ensp;
                {Math.round(
                  ((order.price - tradingPair.lastPrice) /
                    tradingPair.lastPrice) *
                    100 *
                    100
                ) / 100}
              </td>
              <td className="py-4 px-6 text-gray-600">{order.amount}</td>
            </tr>
          ))}
          {/*<tr className="bg-white border-b">*/}
          {/*  <td className="py-4 px-6 text-red-600">1000 +0.01%</td>*/}
          {/*  <td className="py-4 px-6 text-gray-600">0.0001</td>*/}
          {/*</tr>*/}
        </tbody>
      </table>
    </div>
  );
}
