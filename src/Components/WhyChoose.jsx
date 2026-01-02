import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    "CRUD Operations with MongoDB",
    "Real-time Purchase Counter",
    "Search & Filter AI Models",
    "Dark/Light Mode Toggle",
  ];

  return (
    <section data-aos="fade-left" className="max-w-10/12 mx-auto py-16">
      <h3 className="text-center text-4xl font-extrabold text-[#0F766E] mb-12">
         Why Choose ModelTrack AI
      </h3>

      <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <li
            key={i}
            data-aos="fade-up"
            className="
              bg-white
              p-6 rounded-2xl
              shadow-lg
              hover:shadow-[0_15px_30px_rgba(15,118,110,0.35)]
              hover:-translate-y-1 hover:scale-[1.02]
              transition-all duration-300
              flex items-center gap-4
            "
          >
            {/* Icon */}
            <div className="
              w-10 h-10 flex items-center justify-center
              rounded-full
              bg-gradient-to-br from-[#0F766E] to-[#14B8A6]
              text-white text-lg
              shadow-md
            ">
              <FaCheckCircle />
            </div>

            {/* Feature text */}
            <span className="text-gray-800 font-semibold text-sm md:text-base">
              {f}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChoose;
