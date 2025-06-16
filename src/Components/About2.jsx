import React from "react";
import careersImg from "../assets/image-5.jpg";         
import sellImg from "../assets/image-6.jpg";               
import beginningsImg from "../assets/image-7.jpg";   
import contactImg from "../assets/image-8.jpg";         

const cards = [
  {
    title: "Careers at 1MDM",
    img: careersImg,
    link: "#",
    linkText: "Join us",
  },
  {
    title: "Sell at 1MDM",
    img: sellImg,
    link: "#",
    linkText: "Start selling",
  },
  {
    title: "From humble beginnings",
    img: beginningsImg,
    link: "#",
    linkText: "Our Story",
  },
  {
    title: "Contact Us",
    img: contactImg,
    link: "#",
    linkText: "Say hello!",
  },
];

const About2 = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={card.img}
              alt={card.title}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <div className="flex-1 flex flex-col">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{card.title}</h3>
              <a
                href={card.link}
                className="text-red-600 text-sm font-semibold hover:underline"
              >
                {card.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About2;