import { createSlice } from "@reduxjs/toolkit";
import { TradingPair } from "../model/trading-pair";

type TradingPairState = {
  tradingPairs: TradingPair[];
};

const initialState: TradingPairState = {
  tradingPairs: [],
};

export const tradingPairSlice = createSlice({
  name: "tradingPairSlice",
  initialState,
  reducers: {
    setTradingPairs: (state, action) => {
      state.tradingPairs = action.payload;
    },
  },
});

export const { setTradingPairs } = tradingPairSlice.actions;
export default tradingPairSlice.reducer;
