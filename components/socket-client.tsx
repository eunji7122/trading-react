import { useCallback, useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import { setTradingPairs } from "../features/tradingPairSlice";
import { useDispatch } from "react-redux";

export default function SocketClient() {
  const dispatch = useDispatch();
  const socketClient = useRef<CompatClient>();

  const connect = useCallback(() => {
    const socket = new SockJS("http://localhost:8080/websocket");
    socketClient.current = Stomp.over(socket);
    socketClient.current.connect({}, () => {
      socketClient.current?.subscribe("/topic/tradingPairs", (message) => {
        const tradingPairs = JSON.parse(message.body);
        dispatch(setTradingPairs(tradingPairs));
      });
    });
    socketClient.current.activate();
  }, []);

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
