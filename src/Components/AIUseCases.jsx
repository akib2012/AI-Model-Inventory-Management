import React from "react";
import { FaRobot, FaHeartbeat, FaChartLine } from "react-icons/fa";

const AIUseCases = () => {
  const cases = [
    {
      icon: <FaRobot />,
      title: "Automation",
      desc: "AI models automate repetitive tasks, reduce errors, and boost operational efficiency.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Healthcare",
      desc: "AI assists in diagnostics, medical imaging, and personalized treatment planning.",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analysis",
      desc: "AI extracts insights and predicts trends from massive datasets in seconds.",
    },
  ];

  return (
    <section
      data-aos="fade-right"
      className="max-w-10/12 mx-auto py-16"
    >
      <h3 className="text-center text-4xl font-extrabold text-[#0F766E] mb-12">
         AI Use Cases
      </h3>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <div
            key={i}
            data-aos="zoom-in-up"
            className="
              bg-gray-300
              p-8 rounded-2xl
              shadow-lg
              hover:shadow-[0_20px_40px_rgba(15,118,110,0.45)]
              hover:-translate-y-2 hover:scale-[1.03]
              transition-all duration-300
              text-center
            "
          >
            {/* Icon */}
            <div
              className="
                w-16 h-16 mb-5 flex items-center justify-center
                rounded-full
                bg-gradient-to-br from-[#0F766E] to-[#14B8A6]
                text-white text-2xl
                shadow-md
                mx-auto
              "
            >
              {c.icon}
            </div>

            {/* Title */}
            <h5 className="text-2xl font-bold text-[#0F766E] mb-3">
              {c.title}
            </h5>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIUseCases;
