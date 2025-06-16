import React from "react";

const AboutCrucialAccess = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
        {/* Left side: Info */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <div>
            <div className="text-gray-700 font-semibold text-lg mb-1">Conceptualized</div>
            <div className="text-gray-700 text-base">2019</div>
          </div>
          <div>
            <div className="text-gray-700 font-semibold text-lg mb-1">Founder</div>
            <div className="text-gray-700 text-base">Balachander</div>
          </div>
          <div>
            <div className="text-gray-700 font-semibold text-lg mb-1">Launch</div>
            <div className="text-gray-700 text-base">Public beta Jan 2022</div>
          </div>
        </div>
        {/* Right side: Main Story */}
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Building access to crucial life saving devices
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-800" style={{ fontWeight: 400 }}>
            1MDM began as a concept idea in 2019 as a platform for access to medical devices & machines, 
            the idea was to make access to information easy & all in one singular place.
          </h2>
          <p className="text-lg text-gray-800 mb-8" style={{ fontWeight: 400 }}>
            The initial plan began as purely a platform for listing various medical machines across the world, 
            starting with India as the base of this information. However something unexpected struck in 2020 with a global pandemic and 
            the project had been shelved as the focus shifted to building & focusing on existing projects.
          </p>
            <p className="text-lg text-gray-800 mb-8" style={{ fontWeight: 400 }}>
                The global pandemic had taken a serious toll & had pushed the supply chain to its maximum capacity, this phase was followed by sharp hike in prices of oxygen concentrators and people hording or price hiking certain critical and life saving devices during the phase. The project was an obvious solution at the time to help people who were in need of such supplies.
          </p>
          <p className="text-lg text-gray-800 mb-8" style={{ fontWeight: 400 }}>
                After seeing the heavy shortage and strain on the supply chain, 1MDM was launched again but focused only on oxygen concentrators providing reliable information to those in need of such suppliers. We had made sure to provide only manufacturers that weren’t taking advantage of the price hike to unfairly push such products in the market. We had began to slowly expand the product information to include other critical & life saving devices across the sector and began offering the information from our platform as a singular source of the information.
          </p>
          <p className="text-lg text-gray-800 mb-8" style={{ fontWeight: 400 }}>
                1mdm.com began expanding it’s product catalogue to showcase over 100,000 products over the course of the year and became a place for the global market for medical devices. Our vision is to become the singular marketplace across the world to access and find reliable information on life saving devices.
          </p>
        <p className="text-lg text-gray-800 mb-8" style={{ fontWeight: 400 }}>
The relentless search for better access to medical devices continues to be at the core of everything we do. Today, 1MDM connects hundreds of products used by the medical professionals across the globe. Our passion for building technology for medical devices market drives all core decisions.
</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCrucialAccess;