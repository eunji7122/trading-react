import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
