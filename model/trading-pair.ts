import { Asset } from "./asset";

export interface TradingPair {
  id: number;
  baseAsset: Asset;
  quoteAsset: Asset;
  lastPrice: number;
  changeRate: number;
  tradingValue: number;
}
