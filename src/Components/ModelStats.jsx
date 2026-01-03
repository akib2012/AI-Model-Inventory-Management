import React from "react";
import { FaRobot, FaUsers, FaDownload, FaIndustry } from "react-icons/fa";

const ModelStats = () => {
  const stats = [
    {
      label: "AI Models",
      value: "120+",
      icon: <FaRobot />,
    },
    {
      label: "Active Users",
      value: "8.5K",
      icon: <FaUsers />,
    },
    {
      label: "Downloads",
      value: "15K",
      icon: <FaDownload />,
    },
    {
      label: "Industries Served",
      value: "25+",
      icon: <FaIndustry />,
    },
  ];

  return (
    <section
      data-aos="zoom-in"
      className="max-w-10/12 mx-auto py-16"
    >
      <h3 className="text-center text-4xl font-extrabold text-[#0F766E] mb-12">
         Platform Statistics
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            data-aos="flip-up"
            className="
              relative bg-gray-300 backdrop-blur-lg 
              p-8 rounded-2xl shadow-lg
              hover:shadow-[0_20px_40px_rgba(15,118,110,0.35)]
              hover:-translate-y-2 hover:scale-[1.03]
              transition-all duration-300 text-center
            "
          >
            {/* Icon */}
            <div
              className="
                w-16 h-16 mx-auto mb-4 flex items-center justify-center
                rounded-full bg-gradient-to-br from-[#0F766E] to-[#14B8A6]
                text-white text-2xl shadow-md
              "
            >
              {s.icon}
            </div>

            {/* Value */}
            <h4 className="text-4xl font-extrabold text-[#0F766E] mb-2">
              {s.value}
            </h4>

            {/* Label */}
            <p className="text-gray-700 font-semibold tracking-wide">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModelStats;
