import React from "react";
import { Link } from "react-router";

const CTASection = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="max-w-10/12 m-auto mb-7 py-12 text-center bg-[#0F766E]/20 backdrop-blur-xl rounded-3xl p-10"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-[#0F766E] mb-6">
         Ready to Explore AI Models?
      </h3>
      <p className="text-[#0F766E] font-bold mb-6">
        Sign up now to manage, add, and purchase AI models like a pro!
      </p>
      <Link
        to="/login"
        className="px-8 py-4  bg-gradient-to-r from-[#2563EB] to-[#0F766E]
              shadow-lg rounded-2xl text-white
              hover:from-[#1D4ED8] hover:to-[#0D9488]
              hover:shadow-2xl
              transition-all duration-300
              hover:scale-105"
      >
        Add Your Model
      </Link>
    </div>
  );
};

export default CTASection;
