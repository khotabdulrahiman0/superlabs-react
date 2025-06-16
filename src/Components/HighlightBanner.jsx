import React from 'react';

const HighlightBanner = () => {
  return (
    <section className="bg-red-600 text-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-10">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Largest number of products & categories of <br className="hidden sm:block" />
          medical devices on a single place – 1mdm.com
        </h2>
        <p className="text-lg mt-6">
          Connect with buyers worldwide for your product &<br />
          start selling now.
        </p>
      </div>
    </section>
  );
};

export default HighlightBanner;
