import { createSlice } from "@reduxjs/toolkit";
import { TradingPair } from "../model/trading-pair";
import { CandleData } from "../model/candle-data";

type TradingPairState = {
  selectedTradingPairId: number;
  tradingPairs: TradingPair[];
  candles: CandleData[];
};

const initialState: TradingPairState = {
  selectedTradingPairId: 0,
  tradingPairs: [],
  candles: [],
};

export const tradingPairSlice = createSlice({
  name: "tradingPairSlice",
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
  },
});

export const { setSelectedTradingPairId, setTradingPairs, setCandles } =
  tradingPairSlice.actions;
export default tradingPairSlice.reducer;
