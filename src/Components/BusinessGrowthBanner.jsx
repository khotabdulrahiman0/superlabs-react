import React from "react";
import bgImg from "../assets/footer-banner.png"; 

const BusinessGrowthBanner = () => (
  <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden rounded-lg">
    <img
      src={bgImg}
      alt="Business background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0  opacity-90"></div>
    <div className="relative z-10 flex flex-col items-center justify-center w-full">
      <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 text-center drop-shadow-lg">
        Ready to Grow Your Business?
      </h2>
      <div className="flex flex-row gap-6">
        <button className="bg-white text-red-600 font-semibold text-xl px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Start selling
        </button>
        <button className="bg-transparent border-2 border-white text-white font-semibold text-xl px-8 py-3 rounded-full hover:bg-white hover:text-red-600 transition">
          Chat with consultant
        </button>
      </div>
    </div>
  </div>
);

export default BusinessGrowthBanner;