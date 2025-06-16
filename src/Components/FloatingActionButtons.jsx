import React from "react";
import { FaShoppingCart, FaHeadset } from "react-icons/fa";

const FloatingActionButtons = () => (
  <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
    <a
      href="/"
      className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-7 py-3 rounded-full shadow-lg transition"
      style={{ minWidth: "210px", justifyContent: "center" }}
    >
      <FaShoppingCart className="text-xl" />
      Start Selling
    </a>
    <a
      href="/"
      className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-7 py-3 rounded-full shadow-lg transition"
      style={{ minWidth: "210px", justifyContent: "center" }}
    >
      <FaHeadset className="text-xl" />
      Customer Service
    </a>
  </div>
);

export default FloatingActionButtons;