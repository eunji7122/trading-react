import TradingCoinTable from "../trading/TradingCoinTable";
import React, { useState } from "react";
import Holdings from "./Holdings";
import TransactionDetails from "./TransactionDetails";
import NotSignedDetails from "./NotSignedDetails";

export default function InvestmentDetailsLayout() {
  const holdings = "보유자산";
  const transactionDetails = "거래내역";
  const notSignedDetails = "미체결";
  const [isHoldingsTabShown, setIsHoldingsTabShown] = useState(true);
  const [isTransactionDetailsTabShown, setIsTransactionDetailsTabShown] =
    useState(false);
  const [isNotSignedDetailsTabShown, setIsNotSignedDetailsTabShown] =
    useState(false);

  const tabClick = (event) => {
    if (event.target.innerText == holdings) {
      setIsHoldingsTabShown(true);
      setIsTransactionDetailsTabShown(false);
      setIsNotSignedDetailsTabShown(false);
    } else if (event.target.innerText == transactionDetails) {
      setIsHoldingsTabShown(false);
      setIsTransactionDetailsTabShown(true);
      setIsNotSignedDetailsTabShown(false);
    } else {
      setIsHoldingsTabShown(false);
      setIsTransactionDetailsTabShown(false);
      setIsNotSignedDetailsTabShown(true);
    }
  };

  return (
    <div className="mx-auto bg-gray-200 w-full h-full">
      <div className="container flex flex-row justify-between mx-auto">
        <div className="overflow-x-auto relative bg-white mr-2 ml-2 mb-2 mt-2 w-full">
          <div className="w-full items-center">
            <div className="border-b h-12">
              <ul className="flex flex-wrap -mb-px" onClick={tabClick}>
                <li className="mr-2">
                  <a
                    href="#"
                    className={
                      isHoldingsTabShown
                        ? "inline-block py-3 px-20 text-gray-600 rounded-t-lg border-b-2 border-gray-600 active font-bold"
                        : "inline-block py-3 px-20 rounded-t-lg border-b-2 border-transparent text-gray-600"
                    }
                  >
                    {holdings}
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className={
                      isTransactionDetailsTabShown
                        ? "inline-block py-3 px-20 text-gray-600 rounded-t-lg border-b-2 border-gray-600 active font-bold"
                        : "inline-block py-3 px-20 rounded-t-lg border-b-2 border-transparent text-gray-600"
                    }
                  >
                    {transactionDetails}
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className={
                      isNotSignedDetailsTabShown
                        ? "inline-block py-3 px-20 text-gray-600 rounded-t-lg border-b-2 border-gray-600 active font-bold"
                        : "inline-block py-3 px-20 rounded-t-lg border-b-2 border-transparent text-gray-600"
                    }
                  >
                    {notSignedDetails}
                  </a>
                </li>
              </ul>
            </div>
            {isHoldingsTabShown && <Holdings />}
            {isTransactionDetailsTabShown && <TransactionDetails />}
            {isNotSignedDetailsTabShown && <NotSignedDetails />}
          </div>
        </div>
        <div className="">
          <TradingCoinTable />
        </div>
      </div>
    </div>
  );
}
