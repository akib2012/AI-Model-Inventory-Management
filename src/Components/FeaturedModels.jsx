import React from "react";

const FeaturedModels = () => {
  const models = [
    {
      _id: "1",
      name: "ChatGPT",
      description: "Advanced AI chatbot for natural language conversations.",
      image: "https://i.ibb.co.com/xKQ9XmBY/Chat-GPT.jpg",
    },
    {
      _id: "2",
      name: "DALL·E",
      description: "Generates images from text prompts with creative styles.",
      image: "https://i.ibb.co.com/LzCjHFy6/Dalle-3-scaled.jpg",
    },
    {
      _id: "3",
      name: "Codex",
      description: "AI model that writes and understands code efficiently.",
      image: "https://i.ibb.co.com/kgjZQwjW/images.jpg",
    },
    {
      _id: "4",
      name: "Whisper",
      description: "Automatic speech recognition for multiple languages.",
      image: "https://i.ibb.co.com/C3Hs7PHx/wishperjpg.jpg",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="max-w-10/12 m-auto py-8 sm:py-10 md:py-12 px-4"
    >
      <h3 className="text-center text-2xl sm:text-3xl font-bold text-[#0F766E] mb-8 sm:mb-10">
         Featured AI Models
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {models.map((model) => (
          <div
            key={model._id}
            data-aos="flip-left"
            className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-36 sm:h-40 md:h-44 object-cover rounded-xl mb-4"
            />

            <h4 className="text-base sm:text-lg font-semibold text-[#0F766E] mb-2">
              {model.name}
            </h4>

            <p className="text-sm sm:text-[15px] text-[#0F766E] line-clamp-2">
              {model.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedModels;
