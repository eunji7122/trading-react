import { TradingPair } from "./trading-pair";

export interface Transaction {
  id: number;
  tradingPair: TradingPair;
  price: number;
  amount: number;
  updatedAt: string;
}
