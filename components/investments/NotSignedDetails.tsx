// 미체결 탭

export default function NotSignedDetails() {
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
              <th className="p-2 w-1/6">거래종류</th>
              <th className="p-2 w-1/6">감시가격</th>
              <th className="p-2 w-1/6">주문가격</th>
              <th className="p-2 w-1/6">주문수량</th>
              <th className="p-2 w-1/6">미체결량</th>
              <th className="p-2 w-1/6">주문취소</th>
            </tr>
          </thead>
          <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full text-sm h-229">
            <tr className="flex w-full mb-4 border-b text-gray-700 text-xs">
              <td className="p-2 w-1/6 text-left">
                <p>2022.12.07</p>
                <p>20:20</p>
              </td>
              <td className="p-2 w-1/6 text-center">BTC </td>
              <td className="p-2 w-1/6 text-center">매도 </td>
              <td className="p-2 w-1/6 text-center">
                0.001<i className="text-xs text-gray-400">BTC</i>
              </td>
              <td className="p-2 w-1/6 text-center">
                28,000,000<i className="text-xs text-gray-400">KRW</i>
              </td>
              <td className="px-2 py-1.5 w-1/6 text-center">
                1,000,000<i className="text-xs text-gray-400">KRW</i>
              </td>
              <td className="px-2 py-1.5 w-1/6 text-center">
                1,000<i className="text-xs text-gray-400">KRW</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
