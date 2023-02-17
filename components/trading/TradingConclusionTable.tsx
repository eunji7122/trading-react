import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Transaction } from "../../model/transaction";

export default function TradingConclusionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = useCallback(async () => {
    const response = await axios.get<Transaction[]>("/transactions");
    setTransactions(response.data);
  }, []);

  useEffect(() => {
    loadTransactions().then();
  }, []);

  return (
    <div className="overflow-x-auto relative bg-white mr-2 ml-2 mb-2 h-86">
      <div className="border-b">
        <p className="py-1 px-2 m-1 text-gray-900 font-bold">체결내역</p>
      </div>
      <div>
        <table className="table-auto w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-700 uppercase border-b bg-gray-100">
            <tr>
              <th scope="col" className="py-3 px-6">
                체결시간
              </th>
              <th scope="col" className="py-3 px-6">
                체결가격
              </th>
              <th scope="col" className="py-3 px-6">
                체결량
              </th>
              <th scope="col" className="py-3 px-6">
                체결금액
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="bg-white border-b">
                <td className="py-4 px-6">{transaction.updatedAt}</td>
                <td className="py-4 px-6">{transaction.price}</td>
                <td className="py-4 px-6">{transaction.amount}</td>
                <td className="py-4 px-6">
                  {transaction.amount * transaction.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
