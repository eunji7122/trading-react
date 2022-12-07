// 보유자산 탭
import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";

export default function Holdings() {
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });
  const state = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="overflow-hidden">
      <div className="flex border-b">
        <div className="w-2/3 border-r">
          <div className="flex border-b">
            <div className="w-1/2 flex justify-between py-4 px-6 m-4">
              <p className="text-gray-600 text-sm py-1">보유 KRW</p>
              <p className="text-gray-600 text-lg">
                0<i className="text-gray-500 text-xs">KRW</i>
              </p>
            </div>
            <div className="w-1/2 flex justify-between py-4 px-6 m-4">
              <p className="text-gray-600 text-sm py-1">총 보유 자산</p>
              <p className="text-gray-600 text-lg">
                1,000,000<i className="text-gray-500 text-xs">KRW</i>
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 py-4 px-6 m-4">
              <div className="flex justify-between pb-2">
                <p className="text-gray-600 text-sm py-1">총매수금액</p>
                <p className="text-gray-600 text-lg">
                  0<i className="text-gray-500 text-xs">KRW</i>
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 text-sm py-1">총평가금액</p>
                <p className="text-gray-600 text-lg">
                  0<i className="text-gray-500 text-xs">KRW</i>
                </p>
              </div>
            </div>
            <div className="w-1/2 py-4 px-6 m-4">
              <div className="flex justify-between pb-2">
                <p className="text-gray-600 text-sm py-1">총평가손익</p>
                <p className="text-gray-600 text-lg">
                  0<i className="text-gray-500 text-xs">KRW</i>
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 text-sm py-1">총평가수익률</p>
                <p className="text-gray-600 text-lg">
                  0<i className="text-gray-500 text-xs">KRW</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 py-10">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
            height={200}
          />
        </div>
      </div>
      <div>
        <div className="border-b border-gray-400">
          <p className="py-1 px-2 m-1 text-gray-600 font-bold">보유자산 목록</p>
        </div>
        <div>
          <table className="w-full">
            <thead className="w-full text-xs text-gray-700 border-b bg-gray-100">
              <tr className="flex w-full">
                <th className="p-2 w-1/6">보유자산</th>
                <th className="p-2 w-1/6">보유수량</th>
                <th className="p-2 w-1/6">매수평균가</th>
                <th className="p-2 w-1/6">매수금액</th>
                <th className="p-2 w-1/6">평가금액</th>
                <th className="p-2 w-1/6">평가손익</th>
              </tr>
            </thead>
            <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full text-sm h-229">
              <tr className="flex w-full mb-4 border-b text-gray-700">
                <td className="p-2 w-1/6 text-center">
                  <p>비트코인</p>
                  <p className="text-xs text-gray-500">BTC</p>
                </td>
                <td className="p-2 w-1/6 text-right">
                  0.001<i className="text-xs text-gray-400">BTC</i>
                </td>
                <td className="p-2 w-1/6 text-right">
                  28,000,000<i className="text-xs text-gray-400">KRW</i>
                </td>
                <td className="p-2 w-1/6 text-right">
                  1,000,000<i className="text-xs text-gray-400">KRW</i>
                </td>
                <td className="p-2 w-1/6 text-right">
                  1,000,000<i className="text-xs text-gray-400">KRW</i>
                </td>
                <td className="px-2 py-1.5 w-1/6 text-right">
                  <p>
                    0<i className="text-xs text-gray-400">%</i>
                  </p>
                  <p>
                    0<i className="text-xs text-gray-400">KRW</i>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
