import React from "react";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  const { image, name, framework, description, _id } = model;

  return (
    <div className="flex justify-center">
      <div className="relative w-[340px] flex flex-col rounded-2xl bg-white/70 backdrop-blur-md text-gray-800 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        {/* Image Section with Overlay Gradient */}
        <div className="relative -mt-8 mx-4 h-44 overflow-hidden rounded-xl border-2 border-blue-400 shadow-lg shadow-blue-400/30">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            src={image}
            alt={name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-transparent to-transparent"></div>
        </div>

        {/* Text Section */}
        <div className="p-6">
          <h5 className="mb-2 font-sans text-xl font-semibold text-blue-gray-900 antialiased">
            {name}
          </h5>
          <p className="mb-4 text-sm text-gray-700 line-clamp-3">
            {description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {/* Optional tags for AI inventory type */}
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              AI Model
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              ML
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
              NLP
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="p-6 pt-0">
          <Link to={`/models/${_id}`}>
            <button
              type="button"
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 py-3 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
