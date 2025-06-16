import React from "react";
import aboutMainImg from "../assets/image-1.jpg"; 
import About1 from "../Components/About1";
import About2 from "../Components/About2";

const About = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Mission Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 max-w-3xl leading-tight">
          Our mission is to make life<br/>
          saving devices accessible<br/>
          &amp; affordable worldwide.
        </h1>
      </section>

      <section className="flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg relative">
          <img
            src={aboutMainImg}
            alt="Life-saving medical devices"
            className="w-full h-[600px] object-cover object-center"
            style={{ filter: "brightness(0.65)" }} // darken image for readable white text
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-start">
            <div className="p-10 pt-12 md:pt-16 md:p-16 max-w-xl">
              <p className="uppercase text-white font-semibold tracking-wider mb-4 text-sm">
                1MDM MAGAZINE
              </p>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg leading-snug">
                Deep dive into the<br />
                engineering &amp; technology<br />
                behind life saving medical<br />
                devices from 1MDM.
              </h2>
              <a
                href="#"
                className="inline-block mt-2 text-white text-base font-semibold underline underline-offset-4 hover:text-red-200 transition"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <About1/>
      <About2/>
    </div>
  );
};

export default About;