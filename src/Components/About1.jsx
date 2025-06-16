import React from "react";
import productBgImg from "../assets/image-2.jpg"; 

const About1 = () => {
  return (
    <div className="bg-white min-h-screen pb-20 flex flex-col items-center">
      <section className="w-full max-w-7xl mx-auto mt-6 rounded-3xl overflow-hidden relative">
        <div className="relative w-full h-[600px]">
          <img
            src={productBgImg}
            alt="Medical technology illustration"
            className="w-full h-full object-cover"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center">
            <div className="pl-16 pr-8 py-16 flex flex-col justify-center rounded-2xl max-w-xl ml-8">
              <p className="text-gray-800 font-semibold mb-4 text-lg tracking-wide">OUR PRODUCTS</p>
              <h1 className="text-sm sm:text-4xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, how we can help you?
              </h1>
              <a href="#" className="text-red-600 text-sm font-semibold hover:underline mb-6 inline-block">
                See what we build
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About1;