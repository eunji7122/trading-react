import { TradingPair } from "./trading-pair";

export interface Order {
  id: number;
  updatedAt: string;
  tradingPairResponseDto: TradingPair;
  orderType: string;
  price: number;
  amount: number;
  filledAmount: number;
}
