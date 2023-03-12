import { createSlice } from "@reduxjs/toolkit";
import { TradingPair } from "../model/trading-pair";
import { CandleData } from "../model/candle-data";
import { Transaction } from "../model/transaction";

type TradingState = {
  selectedTradingPairId: number;
  tradingPairs: TradingPair[];
  candles: CandleData[];
  transactions: Transaction[];
};

const initialState: TradingState = {
  selectedTradingPairId: 0,
  tradingPairs: [],
  candles: [],
  transactions: [],
};

export const tradingSlice = createSlice({
  name: "tradingSlice",
  initialState,
  reducers: {
    setSelectedTradingPairId: (state, action) => {
      state.selectedTradingPairId = action.payload;
    },
    setTradingPairs: (state, action) => {
      state.tradingPairs = action.payload;
    },
    setCandles: (state, action) => {
      state.candles = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const {
  setSelectedTradingPairId,
  setTradingPairs,
  setCandles,
  setTransactions,
} = tradingSlice.actions;
export default tradingSlice.reducer;
