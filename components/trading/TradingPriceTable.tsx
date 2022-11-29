export default function TradingPriceTable() {
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
          <tr className="bg-white border-b">
            <td className="py-4 px-6 text-red-600">28000000 +0.01%</td>
            <td className="py-4 px-6 text-gray-600">0.0001</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6 text-red-600">28000000 +0.01%</td>
            <td className="py-4 px-6 text-gray-600">0.0001</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6 text-red-600">28000000 +0.01%</td>
            <td className="py-4 px-6 text-gray-600">0.0001</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6 text-blue-600">28000000 -0.01%</td>
            <td className="py-4 px-6 text-gray-600">0.0001</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6 text-blue-600">28000000 -0.01%</td>
            <td className="py-4 px-6 text-gray-600">0.0001</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6 text-blue-600">28000000 -0.01%</td>
            <td className="py-4 px-6 text-gray-600">0.0001</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6 text-blue-600">28000000 -0.01%</td>
            <td className="py-4 px-6 text-gray-600">0.0001</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6 text-blue-600">28000000 -0.01%</td>
            <td className="py-4 px-6 text-gray-600">0.0001</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
