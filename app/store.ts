import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "../features/authSlice";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";

const reducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
