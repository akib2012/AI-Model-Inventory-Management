import React from "react";

const FeaturedModels = () => {
  // 🔹 Static data array
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
    <div data-aos="fade-up" className="max-w-10/12 m-auto py-12">
      <h3 className="text-center text-3xl font-bold text-[#0F766E] mb-10">
         Featured AI Models
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {models.map((model) => (
          <div
            key={model._id}
            data-aos="flip-left"
            className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h4 className="text-lg font-semibold text-[#0F766E] mb-2">
              {model.name}
            </h4>
            <p className="text-sm text-[#0F766E] truncate">{model.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedModels;
