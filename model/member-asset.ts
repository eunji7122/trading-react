import { Asset } from "./asset";

export interface MemberAsset {
  id: number;
  asset: Asset;
  amount: number;
  averagePurchasedPrice: number;
  purchasedPrice: number;
  evaluationPrice: number;
  evaluationRate: number;
}
