export default function TradingOrder() {
  return (
    <div className="overflow-x-auto relative bg-white mr-2 mb-2 h-100">
      <div className="border-b">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 text-red-600 rounded-t-lg border-b-2 border-red-600 active text-lg font-bold"
            >
              매수
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 text-lg"
              aria-current="page"
            >
              매도
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        <div className="w-1/4">
          <div className="py-2 px-2 m-2 h-10">
            <p className="text-gray-600">주문구분</p>
          </div>
          <div className="py-2 px-2 m-2">
            <p className="text-gray-600">주문가능</p>
          </div>
          <div className="py-2 px-2 m-2">
            <p className="text-gray-600">매수가격</p>
          </div>
          <div className="py-2 px-2 m-2">
            <p className="text-gray-600">주문수량</p>
          </div>
          <div className="py-2 px-2 m-2">
            <p className="text-gray-600">주문총액</p>
          </div>
          <div className="px-2 m-2 pt-11">
            <button
              type="button"
              className="w-20 h-8 bg-gray-400 text-white hover:bg-gray-600"
            >
              초기화
            </button>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex items-center py-2 px-2 m-2 ">
            <input
              defaultChecked
              id="default-radio-2"
              type="radio"
              name="default-radio"
              className="w-4 h-4"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 mr-10 text-gray-600"
            >
              지정가
            </label>
            <input
              id="default-radio-2"
              type="radio"
              name="default-radio"
              className="w-4 h-4"
            />
            <label htmlFor="default-radio-2" className="ml-2 text-gray-600">
              시장가
            </label>
          </div>
          <div className="flex items-center py-2 px-2 m-2">
            <p>0원</p>
          </div>
          <div className="flex items-center py-2 px-2 m-2 h-10">
            <input
              type="number"
              className="border border-solid border-gray-300 focus:border-blue-600 focus:border-2 focus:outline-none
              px-3 w-full text-gray-700 font-bold h-8"
            />
          </div>
          <div className="flex items-center py-2 px-2 m-2 h-10">
            <input
              type="number"
              className="border border-solid border-gray-300 focus:border-blue-600 focus:border-2 focus:outline-none
              px-3 w-full text-gray-700 h-8"
            />
          </div>
          <div className="flex items-center py-2 px-2 m-2 h-10">
            <input
              type="number"
              className="border border-solid border-gray-300 focus:border-blue-600 focus:border-2 focus:outline-none
              px-3 w-full text-gray-700 h-8"
            />
          </div>
          <div className="px-2 m-2 pt-11">
            <button
              type="button"
              className="w-full h-8 bg-red-600 text-white hover:bg-red-700"
            >
              매수
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
