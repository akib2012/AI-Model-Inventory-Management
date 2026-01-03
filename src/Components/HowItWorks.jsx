import React from "react";
import { FaRegCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    "Sign Up or Login",
    "Browse AI Models",
    "Add, Edit, or Delete Models",
    "Purchase Models & Track Usage",
  ];

  return (
    <section data-aos="fade-left" className="max-w-10/12 mx-auto py-16">
      <h3 className="text-center text-4xl font-extrabold text-[#0F766E] mb-12">
         How It Works
      </h3>

      <ol className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((s, i) => (
          <li
            key={i}
            data-aos="zoom-in"
            className="
              bg-gray-300
              p-6 rounded-2xl
              shadow-lg
              hover:shadow-[0_20px_40px_rgba(15,118,110,0.35)]
              hover:-translate-y-1 hover:scale-[1.02]
              transition-all duration-300
              flex items-center gap-4
            "
          >
            {/* Step Number / Icon */}
            <div className="
              w-10 h-10 flex items-center justify-center
              rounded-full
              bg-gradient-to-br from-[#0F766E] to-[#14B8A6]
              text-white text-lg font-bold
              shadow-md
            ">
              {i + 1}
            </div>

            {/* Step text */}
            <span className="text-gray-800 font-semibold text-sm md:text-base">
              {s}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
