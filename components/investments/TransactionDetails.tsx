// 거래내역 탭

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Member } from "../../model/member";
import { Transaction } from "../../model/transaction";

export default function TransactionDetails() {
  const [member, setMember] = useState<Member>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadMember = useCallback(async () => {
    const response = await axios.get<Member>("/members/me");
    setMember(response.data);
  }, []);

  useEffect(() => {
    loadMember().then();
  }, []);

  const loadTransactions = useCallback(async () => {
    const response = await axios.get<Transaction[]>("/transactions/me");
    setTransactions(response.data);
  }, []);

  useEffect(() => {
    loadTransactions().then();
  }, []);

  const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간
  const d = new Date();
  const date = new Date(d.getTime() + TIME_ZONE).toISOString().split("T")[0];

  return (
    <div>
      <div className="flex h-28 border-b border-gray-300">
        <div className="w-1/3 py-2 px-4 m-2">
          <div>
            <span className="text-xs text-gray-500">기간 {date}</span>
          </div>
          <div>
            <ul className="flex flex-wrap mt-2">
              <li>
                <button className="border border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold w-14">
                  1주일
                </button>
              </li>
              <li>
                <button className="border-t border-b border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold focus:border w-14">
                  1개월
                </button>
              </li>
              <li>
                <button className="border border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold w-14">
                  3개월
                </button>
              </li>
              <li>
                <button className="border-t border-b border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold focus:border w-14">
                  6개월
                </button>
              </li>
              <li>
                <button className="border border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold w-12">
                  전체
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 py-2 px-4 m-2">
          <div>
            <span className="text-xs text-gray-500">종류</span>
          </div>
          <div>
            <ul className="flex flex-wrap mt-2">
              <li>
                <button className="border border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold w-14">
                  전체
                </button>
              </li>
              <li>
                <button className="border-t border-b border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold focus:border w-14">
                  매수
                </button>
              </li>
              <li>
                <button className="border border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold w-14">
                  매도
                </button>
              </li>
              <li>
                <button className="border-t border-b border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold focus:border w-14">
                  입금
                </button>
              </li>
              <li>
                <button className="border border-gray-300 p-2 text-sm text-gray-600 focus:border-blue-500 focus:text-blue-600 focus:font-bold w-14">
                  출금
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 py-2 px-4 m-2">
          <div>
            <span className="text-xs text-gray-500">코인선택</span>
          </div>
          <div>
            <input
              type="search"
              className="form-control my-2 border-gray-300 border flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-sm"
              placeholder="전체"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead className="w-full text-xs text-gray-700 border-b bg-gray-100">
            <tr className="flex w-full">
              <th className="p-2 w-1/6">체결시간</th>
              <th className="p-2 w-1/6">코인</th>
              <th className="p-2 w-1/6">마켓</th>
              <th className="p-2 w-1/6">종류</th>
              <th className="p-2 w-1/6">거래수량</th>
              <th className="p-2 w-1/6">거래단가</th>
              <th className="p-2 w-1/6">거래금액</th>
            </tr>
          </thead>
          <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full text-sm">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="flex w-full mb-4 border-b text-gray-700 text-xs"
              >
                <td className="p-2 w-1/6 text-left">
                  <p>{transaction.updatedAt}</p>
                </td>
                <td className="p-2 w-1/6 text-center">
                  {transaction.tradingPair.baseAsset.symbol}
                </td>
                <td className="p-2 w-1/6 text-center">
                  {transaction.tradingPair.quoteAsset.symbol}
                </td>
                <td className="p-2 w-1/6 text-center">
                  {transaction.buyer.username == member?.username
                    ? "매수"
                    : "매도"}
                </td>
                <td className="p-2 w-1/6 text-center">
                  {transaction.amount}&nbsp;
                  <i className="text-xs text-gray-400">
                    {transaction.tradingPair.quoteAsset.symbol}
                  </i>
                </td>
                <td className="p-2 w-1/6 text-center">
                  {transaction.price / transaction.amount}&nbsp;
                  <i className="text-xs text-gray-400">
                    {transaction.tradingPair.quoteAsset.symbol}
                  </i>
                </td>
                <td className="px-2 py-1.5 w-1/6 text-center">
                  {transaction.price}&nbsp;
                  <i className="text-xs text-gray-400">
                    {transaction.tradingPair.quoteAsset.symbol}
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
