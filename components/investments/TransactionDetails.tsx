// 거래내역 탭

export default function TransactionDetails() {
  return (
    <div>
      <div className="flex h-28 border-b border-gray-300">
        <div className="w-1/3 py-2 px-4 m-2">
          <div>
            <span className="text-xs text-gray-500">기간 2022.12.7</span>
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
              <th className="p-2 w-1/6">종류</th>
              <th className="p-2 w-1/6">거래수량</th>
              <th className="p-2 w-1/6">거래단가</th>
              <th className="p-2 w-1/6">거래금액</th>
              <th className="p-2 w-1/6">수수료</th>
              <th className="p-2 w-1/6">정산금액</th>
              <th className="p-2 w-1/6">주문시간</th>
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
              <td className="px-2 py-1.5 w-1/6 text-center">
                999,000<i className="text-xs text-gray-400">KRW</i>
              </td>
              <td className="px-2 py-1.5 w-1/6 text-left">
                <p>2022.12.07</p>
                <p>20:20</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
