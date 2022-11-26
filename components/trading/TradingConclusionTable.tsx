import React from "react";

export default function TradingConclusionTable() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-3xl">체결내역</p>
      </div>
      <div>
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-4 px-6">11/27 00:49</td>
              <td className="py-4 px-6">28,000,000</td>
              <td className="py-4 px-6">0.001</td>
              <td className="py-4 px-6">1,000,000</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-4 px-6">11/27 00:49</td>
              <td className="py-4 px-6">28,000,000</td>
              <td className="py-4 px-6">0.001</td>
              <td className="py-4 px-6">1,000,000</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-4 px-6">11/27 00:49</td>
              <td className="py-4 px-6">28,000,000</td>
              <td className="py-4 px-6">0.001</td>
              <td className="py-4 px-6">1,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
