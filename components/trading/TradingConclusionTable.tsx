export default function TradingConclusionTable() {
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
            <tr className="bg-white border-b">
              <td className="py-4 px-6">11/27 00:49</td>
              <td className="py-4 px-6">28,000,000</td>
              <td className="py-4 px-6">0.001</td>
              <td className="py-4 px-6">1,000,000</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="py-4 px-6">11/27 00:49</td>
              <td className="py-4 px-6">28,000,000</td>
              <td className="py-4 px-6">0.001</td>
              <td className="py-4 px-6">1,000,000</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="py-4 px-6">11/27 00:49</td>
              <td className="py-4 px-6">28,000,000</td>
              <td className="py-4 px-6">0.001</td>
              <td className="py-4 px-6">1,000,000</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="py-4 px-6">11/27 00:49</td>
              <td className="py-4 px-6">28,000,000</td>
              <td className="py-4 px-6">0.001</td>
              <td className="py-4 px-6">1,000,000</td>
            </tr>
            <tr className="bg-white border-b">
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
