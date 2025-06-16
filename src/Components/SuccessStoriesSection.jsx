import React, { useState } from "react";
import storyImg1 from '../assets/slider-1.webp';
import storyImg2 from '../assets/slider-2.webp';    
import storyImg3 from '../assets/slider-3.webp';  
import storyImg4 from '../assets/slider-4.webp';  

const stories = [
  {
    quote: `Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional.`,
    image: storyImg1,
    alt: "Mr David Success Story"
  },
  {
    quote: `Lab Evolution is an import-export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.`,
    image: storyImg2,
    alt: "Lab Evolution Success Story"
  },
  {
    quote: `LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.`,
    image: storyImg4,
    alt: "Shanghai Mingli Trading Co. Success Story"
  },
  {
    quote: `Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line`,
    image: storyImg3,
    alt: "Fashion Label Success Story"
  }
];

const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = stories[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === stories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-[#f6f7fa] py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-10">
        Success stories from 1mdm.com sellers
      </h2>

      <div className="flex justify-center items-center gap-6 mb-8">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg"
          aria-label="Previous"
        >
          <svg width="20" height="20" fill="none">
            <path d="M12 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="relative max-w-6xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-all duration-300">
          {/* Text */}
          <div className="flex-1 p-8 flex items-center">
            <p className="text-gray-800 text-lg leading-relaxed">
              {current.quote}
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src={current.image}
              alt={current.alt}
              className="w-full h-full object-cover md:rounded-r-2xl"
              style={{ maxHeight: 460 }}
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg"
          aria-label="Next"
        >
          <svg width="20" height="20" fill="none">
            <path d="M8 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;