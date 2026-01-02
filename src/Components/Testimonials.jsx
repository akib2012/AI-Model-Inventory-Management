import React from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Ahmed",
      message:
        "This platform helped our team integrate AI models faster than ever. The UI is clean and very intuitive.",
    },
    {
      name: "Rahim Uddin",
      message:
        "Excellent performance and great documentation. It significantly improved our development workflow.",
    },
    {
      name: "Nusrat Jahan",
      message:
        "A reliable and scalable solution for AI-driven applications. Highly recommended for startups.",
    },
  ];

  return (
    <section data-aos="fade-up" className="max-w-10/12 mx-auto py-16">
      <h3 className="text-center text-4xl font-extrabold text-[#0F766E] mb-12">
         User Testimonials
      </h3>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            className="
              bg-white p-8 rounded-2xl shadow-lg
              hover:shadow-[0_20px_40px_rgba(15,118,110,0.35)]
              hover:-translate-y-2 hover:scale-[1.03]
              transition-all duration-300
              relative
            "
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-4 text-[#0F766E] text-3xl">
              <FaQuoteLeft />
            </div>

            {/* User Icon */}
            <div className="
              w-16 h-16 mx-auto mb-4 flex items-center justify-center
              rounded-full bg-gradient-to-br from-[#0F766E] to-[#14B8A6]
              text-white text-2xl shadow-md
            ">
              <FaUserCircle />
            </div>

            {/* Message */}
            <p className="text-gray-600 mb-6 text-sm leading-relaxed text-center">
              {r.message}
            </p>

            {/* Name */}
            <h5 className="text-[#0F766E] font-semibold text-center">
              {r.name}
            </h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
