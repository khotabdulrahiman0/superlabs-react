import React, { useState } from 'react';
import firstp from '../assets/1mdm-product-1.png';
import sp from '../assets/1mdm-product-2.png';
import tp from '../assets/1mdm-product-3.png';
import fp from '../assets/1mdm-product-image-4.png';

// The reordered tools data to match the 1mdm.com/about/seller.php layout and content
const toolsData = [
  {
    title: "Custom Storefront",
    heading: "Set up your own online store with your brand",
    description:
      "Stand out from the competition with an exclusive storefront dedicated to your products. No design or coding required. Let your products shine and your brand speak for itself, while buyers easily browse your offerings.",
    image: firstp, 
  },
  {
    title: "Advertising Tools",
    heading: "Boost your exposure worldwide",
    description:
      "Promote your products using advanced advertising tools. Reach targeted B2B buyers and enjoy up to 120% more visibility, with smart placements that put your products in front of the right audience.",
    image: fp,
  },
  {
    title: "Data & Analytics",
    heading: "Make smarter business decisions with powerful insights",
    description:
      "Monitor store performance and track buyer behavior with our comprehensive analytics dashboard. Use actionable data to optimize your listings, marketing, and sales strategies.",
    image: sp,
  },
  {
    title: "Seller Support",
    heading: "Get dedicated support every step of the way",
    description:
      "Your success is our priority. Access expert help, training resources, and live chat whenever you need it—so you can focus on growing your business.",
    image: tp,
  },
];

const ToolsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTool = toolsData[activeIndex];

  return (
    <section className="bg-[#f7f7fb] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-4 tracking-tight">
          Tools to help your business grow
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Our platform gives you everything you need to build your brand, reach more buyers, and manage your business with confidence.
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          {/* Sidebar Tabs */}
          <div className="md:w-1/4 flex md:flex-col flex-row gap-4 md:gap-6 md:border-l-2 border-red-100 md:pl-4 overflow-x-auto">
            {toolsData.map((tool, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-200 whitespace-nowrap text-base md:text-lg font-semibold rounded-t-lg md:rounded-t-none md:rounded-l-lg px-4 py-3 focus:outline-none
                  ${activeIndex === index
                    ? 'bg-white md:bg-red-50 text-red-700 shadow border-l-4 md:border-l-8 border-red-600'
                    : 'bg-transparent text-gray-800 hover:text-red-600 hover:bg-red-50'
                  }`}
                style={{ minWidth: 150 }}
              >
                {tool.title}
              </button>
            ))}
          </div>

          {/* Main Content and Image */}
          <div className="flex-1 flex flex-col-reverse md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-8">
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {activeTool.heading}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {activeTool.description}
              </p>
            </div>
            {/* Image */}
            <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
              <img
                src={activeTool.image}
                alt={activeTool.title}
                className="w-full max-w-xs md:max-w-sm rounded-xl shadow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;