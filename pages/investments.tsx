import NavigationBar from "../components/NavigationBar";
import React from "react";
import Footer from "../components/Footer";
import InvestmentDetailsLayout from "../components/investments/InvestmentDetailsLayout";

export default function investments() {
  return (
    <div className="bg-gray-200">
      <NavigationBar />
      <InvestmentDetailsLayout />
      <Footer />
    </div>
  );
}
