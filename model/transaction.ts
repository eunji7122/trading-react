import { TradingPair } from "./trading-pair";
import { Member } from "./member";

export interface Transaction {
  id: number;
  buyer: Member;
  seller: Member;
  tradingPair: TradingPair;
  price: number;
  amount: number;
  updatedAt: string;
}
