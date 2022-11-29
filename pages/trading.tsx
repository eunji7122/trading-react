import React from "react";
import NavigationBar from "../components/NavigationBar";
import TradingLayout from "../components/trading/TradingLayout";
import Footer from "../components/Footer";

export default function trading() {
  return (
    <>
      <NavigationBar />
      <TradingLayout />
      <Footer />
    </>
  );
}
