// 미체결 탭

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Order } from "../../model/order";

export default function NotSignedDetails() {
  const [orders, setOrders] = useState<Order[]>([]);

  const loadOrders = useCallback(async () => {
    const response = await axios.get<Order[]>("/orders");
    setOrders(response.data);
  }, []);

  useEffect(() => {
    loadOrders().then();
  }, []);

  return (
    <div>
      <div className="border-b">
        <div className="py-2 px-4 m-2">
          <span className="text-gray-600">전체 주문</span>
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead className="w-full text-xs text-gray-700 border-b bg-gray-100">
            <tr className="flex w-full">
              <th className="p-2 w-1/6">시간</th>
              <th className="p-2 w-1/6">마켓명</th>
              <th className="p-2 w-1/6">거래종류</th>
              <th className="p-2 w-1/6">감시가격</th>
              <th className="p-2 w-1/6">주문가격</th>
              <th className="p-2 w-1/6">주문수량</th>
              <th className="p-2 w-1/6">미체결량</th>
              <th className="p-2 w-1/6">주문취소</th>
            </tr>
          </thead>
          <tbody className="flex flex-col  justify-between overflow-y-scroll w-full text-sm">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="flex w-full mb-4 border-b text-gray-700 text-xs"
              >
                <td className="p-2 w-1/6 text-left">
                  <p>{order.updatedAt}</p>
                </td>
                <td className="p-2 w-1/6 text-center">
                  {order.tradingPairResponseDto.quoteAsset.symbol}
                </td>
                <td className="p-2 w-1/6 text-center">
                  {order.orderType == "BUY" ? "매수" : "매도"}
                </td>
                <td className="p-2 w-1/6 text-center">
                  {order.tradingPairResponseDto.lastPrice}&nbsp;
                  <i className="text-xs text-gray-400">
                    {order.tradingPairResponseDto.quoteAsset.symbol}
                  </i>
                </td>
                <td className="p-2 w-1/6 text-center">
                  {order.price}&nbsp;
                  <i className="text-xs text-gray-400">
                    {order.tradingPairResponseDto.quoteAsset.symbol}
                  </i>
                </td>
                <td className="p-2 w-1/6 text-center">
                  {order.amount}&nbsp;
                  <i className="text-xs text-gray-400">
                    {order.tradingPairResponseDto.baseAsset.symbol}
                  </i>
                </td>
                <td className="px-2 py-1.5 w-1/6 text-center">
                  {order.amount - order.filledAmount} &nbsp;
                  <i className="text-xs text-gray-400">
                    {order.tradingPairResponseDto.baseAsset.symbol}
                  </i>
                </td>
                <td className="px-2 py-1.5 w-1/6 text-center"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
