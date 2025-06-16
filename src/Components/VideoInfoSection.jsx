import React from 'react';

const VideoInfoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          1mdm.com is a leading ecommerce platform that<br />helps SMEs go global
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start text-left">
          {/* Left: Video Embed */}
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/TN7iJyc5Uks?si=pK-QnhNv0kvte_an"
              title="SIGNA Explorer Lift"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right: Text Points */}
          <div className="flex flex-col justify-center space-y-6 text-gray-700 text-lg">
            <p>Connect with millions of business buyers from around the world.</p>
            <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
            <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoInfoSection;
