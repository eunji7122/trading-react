// 보유자산 탭
import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { MemberAsset } from "../../model/member-asset";
import { MemberKrwAsset } from "../../model/MemberKrwAsset";

export default function Holdings() {
  const [memberAssets, setMemberAssets] = useState<MemberAsset[]>([]);
  const [memberKrwAssets, setMemberKrwAssets] = useState<MemberKrwAsset>();

  const loadMemberAssets = useCallback(async () => {
    const response = await axios.get<MemberAsset[]>("/memberAssets/details");
    setMemberAssets(response.data);
    memberAssets.map((memberAsset) =>
      console.log(
        (memberAsset.evaluationPrice / memberKrwAssets?.totalPurchasedPrice) *
          100
      )
    );
  }, []);

  const loadMemberKrwAsset = useCallback(async () => {
    const response = await axios.get<MemberKrwAsset>("/memberAssets/krw");
    setMemberKrwAssets(response.data);
  }, []);

  useEffect(() => {
    loadMemberAssets().then();
  }, []);

  useEffect(() => {
    loadMemberKrwAsset().then();
  }, []);

  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });
  const state = {
    series: memberAssets.map(
      (memberAsset) =>
        (memberAsset.evaluationPrice / memberKrwAssets?.totalPurchasedPrice) *
        100
    ),
    // series: [50, 50],
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
                {memberKrwAssets?.krwAmount}&nbsp;
                <i className="text-gray-500 text-xs">KRW</i>
              </p>
            </div>
            <div className="w-1/2 flex justify-between py-4 px-6 m-4">
              <p className="text-gray-600 text-sm py-1">총 보유 자산</p>
              <p className="text-gray-600 text-lg">
                {memberKrwAssets?.totalAmount}&nbsp;
                <i className="text-gray-500 text-xs">KRW</i>
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 py-4 px-6 m-4">
              <div className="flex justify-between pb-2">
                <p className="text-gray-600 text-sm py-1">총매수금액</p>
                <p className="text-gray-600 text-lg">
                  {memberKrwAssets?.totalPurchasedPrice}&nbsp;
                  <i className="text-gray-500 text-xs">KRW</i>
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 text-sm py-1">총평가금액</p>
                <p className="text-gray-600 text-lg">
                  {memberKrwAssets?.totalEvaluationPrice}&nbsp;
                  <i className="text-gray-500 text-xs">KRW</i>
                </p>
              </div>
            </div>
            <div className="w-1/2 py-4 px-6 m-4">
              <div className="flex justify-between pb-2">
                <p className="text-gray-600 text-sm py-1">총평가손익</p>
                <p className="text-gray-600 text-lg">
                  {memberKrwAssets?.totalEvaluationProfitAndLoss}&nbsp;
                  <i className="text-gray-500 text-xs">KRW</i>
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 text-sm py-1">총평가수익률</p>
                <p className="text-gray-600 text-lg">
                  {memberKrwAssets?.totalEvaluationRate}&nbsp;
                  <i className="text-gray-500 text-xs">%</i>
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
            <tbody className="flex flex-col  justify-between overflow-y-scroll w-full text-sm">
              {memberAssets.map((memberAsset) => (
                <tr
                  key={memberAsset.id}
                  className="flex w-full mb-4 border-b text-gray-700"
                >
                  <td className="p-2 w-1/6 text-center">
                    <p>{memberAsset.asset.name}</p>
                    <p className="text-xs text-gray-500">
                      {memberAsset.asset.symbol}
                    </p>
                  </td>
                  <td className="p-2 w-1/6 text-right">
                    {memberAsset.amount}
                    <i className="text-xs text-gray-400">
                      {memberAsset.asset.symbol}
                    </i>
                  </td>
                  <td className="p-2 w-1/6 text-right">
                    {memberAsset.averagePurchasedPrice}
                    <i className="text-xs text-gray-400">
                      {memberAsset.asset.symbol}
                    </i>
                  </td>
                  <td className="p-2 w-1/6 text-right">
                    {memberAsset.purchasedPrice}
                    <i className="text-xs text-gray-400">
                      {memberAsset.asset.symbol}
                    </i>
                  </td>
                  <td className="p-2 w-1/6 text-right">
                    {memberAsset.evaluationPrice}
                    <i className="text-xs text-gray-400">
                      {memberAsset.asset.symbol}
                    </i>
                  </td>
                  <td className="px-2 py-1.5 w-1/6 text-right">
                    <p>
                      {memberAsset.evaluationRate}
                      <i className="text-xs text-gray-400">%</i>
                    </p>
                    <p>
                      {memberAsset.evaluationPrice - memberAsset.purchasedPrice}
                      <i className="text-xs text-gray-400">
                        {memberAsset.asset.symbol}
                      </i>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
