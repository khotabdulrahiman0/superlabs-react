import React, { useRef, useEffect, useState } from 'react';
import backgroundImage from '../assets/seller-banner.png';

const stats = [
  {
    value: 26000000,
    label: "active buyers globally"
  },
  {
    value: 400000,
    label: "product inquiries daily"
  },
  {
    value: 200,
    label: "countries and regions represented"
  }
];

// Helper hook for count up animation
function useCountUp(to, duration = 1800) {
  const [count, setCount] = useState(0);
  const start = useRef(0);
  const startTime = useRef(null);

  useEffect(() => {
    let rafId;

    function animate(ts) {
      if (!startTime.current) startTime.current = ts;
      const progress = Math.min((ts - startTime.current) / duration, 1);
      setCount(Math.floor(progress * (to - start.current) + start.current));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line
  }, [to, duration]);

  return count;
}

// Helper to format big numbers
function formatNumber(num) {
  if (num >= 1000000) return num.toLocaleString();
  if (num >= 1000) return num.toLocaleString();
  return num;
}

const HeroSection = () => {
  // Animate each stat value
  const animatedCounts = stats.map(stat => useCountUp(stat.value, 1800));

  return (
    <section 
      className="relative py-16 overflow-hidden bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-700 text-lg font-medium mb-4">Sell on 1mdm.com</p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Reach millions of B2B buyers 
                <span className="block">globally</span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Start selling
              </button>
              <button className="border-2 border-red-500 text-red-500 hover:bg-red-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Chat with consultant
              </button>
            </div>
          </div>
          {/* Statistics Cards - improved and responsive */}
          <div className="flex flex-col gap-6 lg:gap-8 items-end w-full">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 text-right w-full sm:w-80"
              >
                <div className="text-3xl lg:text-3xl font-bold text-gray-800 mb-1">
                  {formatNumber(animatedCounts[idx])}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;