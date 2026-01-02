import React from "react";
import { Link } from "react-router";

const MyPurchase = ({ p }) => {
  const {
    image,
    name,
    framework,
    useCase,
    _id,
    createdBy,
    downloaded_by,
  } = p;

  return (
    <div className="flex justify-center">
      <div className="relative flex w-[330px] flex-col rounded-xl  dark:bg-[#0F172A] bg-clip-border text-gray-700 dark:text-gray-200 shadow-md hover:scale-105 transition-transform duration-300">
        {/* Image */}
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden border-2 border-blue-500 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-blue-600">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>

        {/* Info section */}
        <div className="p-5 space-y-1">
          <h5 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            {name}
          </h5>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Framework:</span> {framework}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Use Case:</span> {useCase}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Created By:</span> {createdBy}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Purchased By:</span> {downloaded_by}
          </p>
        </div>

        {/* Button */}
        <div className="p-5 pt-0">
          <Link to={`/models/${_id}`}>
            <button
              type="button"
              className="select-none rounded-lg bg-[#0528f2] py-3 px-6 text-xs font-bold uppercase text-white shadow-md hover:bg-[#274bfa] transition-all"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPurchase;

