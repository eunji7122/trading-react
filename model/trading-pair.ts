import { Asset } from "./asset";

export interface TradingPair {
  id: number;
  baseAsset: Asset;
  quoteAsset: Asset;
  lastPrice: number;
  changeRate: number;
  tradingAmount: number;
  tradingValue: number;
  highestPrice: number;
  lowestPrice: number;
}
