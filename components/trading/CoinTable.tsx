export default function CoinTable() {
  return (
    <div className="overflow-x-auto relative bg-white m-2">
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
        <tbody>
          <tr className="bg-white border-b">
            <td
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              비트코인
            </td>
            <td className="py-4 px-6">28000000</td>
            <td className="py-4 px-6">+10%</td>
            <td className="py-4 px-6">100,000만</td>
          </tr>
          <tr className="bg-white border-b">
            <td
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              이더리움
            </td>
            <td className="py-4 px-6">28000000</td>
            <td className="py-4 px-6">+10%</td>
            <td className="py-4 px-6">100,000만</td>
          </tr>
          <tr className="bg-white border-b">
            <td
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              승희
            </td>
            <td className="py-4 px-6">1</td>
            <td className="py-4 px-6">+10%</td>
            <td className="py-4 px-6">100,000만</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
