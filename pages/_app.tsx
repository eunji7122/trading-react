import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useEffect } from "react";
import axios from "axios";
import RouteGuard from "../components/RouteGuard";
export let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:8080";
    axios.interceptors.request.use(
      function (config) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${store.getState().auth.token}`,
        };
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </PersistGate>
    </Provider>
  );
}
