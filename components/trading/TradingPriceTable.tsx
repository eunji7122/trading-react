export default function TradingPriceTable() {
  return (
    <div className="overflow-x-auto relative">
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6">28000000 +0.01%</td>
            <td className="py-4 px-6">0.0001</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6">28000000 +0.01%</td>
            <td className="py-4 px-6">0.0001</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6">28000000 +0.01%</td>
            <td className="py-4 px-6">0.0001</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
