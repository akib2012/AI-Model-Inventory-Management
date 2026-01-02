import React from "react";
import slide2 from "../assets/im2.jpg";
import { Link } from "react-router";

const Slider = () => {
  return (
    <div className="w-full">
      <div
        className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${slide2})` }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/80"></div>

        <div className="relative z-10 text-center px-4 md:px-12 max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Smarter AI Model Management in One Place
          </h1>

          <p className="text-[#E0F2FE] font-medium mb-8 text-base md:text-md">
            Easily organize, track, and showcase your AI models. From datasets
            to deployment — keep everything structured, secure, and accessible
            with ModelTrack AI.
          </p>

          <Link
            to="/ViewsAllModels"
            className="
              px-8 py-3 rounded-xl font-bold text-white
              bg-gradient-to-r from-[#2563EB] to-[#0F766E]
              shadow-lg
              hover:from-[#1D4ED8] hover:to-[#0D9488]
              hover:shadow-2xl
              transition-all duration-300
              hover:scale-105
            "
          >
            Explore Models
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
      </div>
    </div>
  );
};

export default Slider;
