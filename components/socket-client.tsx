import { useCallback, useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import {
  setTradingPairs,
  setCandles,
  setTransactions,
} from "../features/tradingSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/store";
import { StompSubscription } from "@stomp/stompjs/esm6/stomp-subscription";

export default function SocketClient() {
  const dispatch = useDispatch();
  const socketClient = useRef<CompatClient>();
  const selectedTradingPairId = useAppSelector(
    (state) => state.trading.selectedTradingPairId
  );
  const [candleSubscriptions, setCandleSubscriptions] = useState<
    StompSubscription[]
  >([]);

  const connect = useCallback(() => {
    const socket = new SockJS("http://localhost:8080/websocket");
    socketClient.current = Stomp.over(socket);
    socketClient.current.connect({}, () => {
      socketClient.current?.subscribe("/topic/tradingPairs", (message) => {
        const tradingPairs = JSON.parse(message.body);
        dispatch(setTradingPairs(tradingPairs));
      });

      socketClient.current?.subscribe("/topic/transactions", (message) => {
        const transactions = JSON.parse(message.body);
        dispatch(setTransactions(transactions));
      });

      const subscription = socketClient.current?.subscribe(
        `/topic/candles/${selectedTradingPairId}`,
        (message) => {
          const candles = JSON.parse(message.body);
          dispatch(setCandles(candles));
        }
      );
      if (subscription != null)
        setCandleSubscriptions((subscriptions) =>
          subscriptions.concat(subscription)
        );
    });
    socketClient.current.activate();
  }, []);

  useEffect(() => {
    if (socketClient.current == null || !socketClient.current?.active) return;
    candleSubscriptions.forEach((subscription) => subscription.unsubscribe());
    const subscription = socketClient.current?.subscribe(
      `/topic/candles/${selectedTradingPairId}`,
      (message) => {
        const candles = JSON.parse(message.body);
        dispatch(setCandles(candles));
      }
    );
    if (subscription != null)
      setCandleSubscriptions((subscriptions) =>
        subscriptions.concat(subscription)
      );
  }, [socketClient, selectedTradingPairId]);

  const disconnect = useCallback(() => {
    socketClient.current?.disconnect();
    socketClient.current?.deactivate();
  }, [socketClient]);

  useEffect(() => {
    connect();
    return disconnect;
  }, []);

  return <></>;
}
