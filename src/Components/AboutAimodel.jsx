import React from "react";

const AboutAimodel = () => {
  return (
    <div data-aos="zoom-in-right" className="max-w-10/12 m-auto pb-9">
      <h3 className="text-center text-2xl font-bold text-[#0F766E]">About Ai model</h3>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div data-aos="zoom-in-right" className="bg-[#0F766E]/40 p-6 rounded-xl shadow hover:shadow-[0_0_10px_rgba(108,99,255,0.3)]">
          <h3 className="text-[#0528f2] text-xl font-semibold mb-2">
            🧠 Neural Networks
          </h3>
          <p className="text-white font-semibold text-sm">
            Neural Networks are the foundation of modern Artificial
            Intelligence. They mimic how the human brain processes information,
            learning patterns from massive datasets through layers of
            interconnected nodes. Each neuron processes inputs, applies weights,
            and passes signals forward to make predictions or decisions. From
            speech recognition to game-playing agents, neural networks adapt and
            improve through training. They learn complex relationships that
            traditional algorithms can’t easily capture. Today, they power
            everything from self-driving cars to chatbots and medical diagnosis
            systems — making machines think smarter every day.
          </p>
        </div>

        <div className="bg-[#0F766E]/40 p-6 rounded-xl shadow hover:shadow-[0_0_10px_rgba(108,99,255,0.3)]">
          <h3 className="text-[#0528f2] text-xl font-semibold mb-2">
            💬 NLP Models
          </h3>
          <p className="text-white font-semibold text-sm">
            Natural Language Processing (NLP) enables computers to understand
            and generate human language. These models process text, extract
            meaning, and even respond intelligently — just like humans in
            conversation. Modern NLP systems like GPT and BERT learn from
            billions of words to capture context, tone, and intent. They’re
            behind applications such as chatbots, translation tools, sentiment
            analysis, and document summarization. By combining linguistics and
            deep learning, NLP helps bridge the communication gap between humans
            and machines. It’s the core of AI assistants, content generation,
            and smart search engines that truly understand you.
          </p>
        </div>

        <div className="bg-[#0F766E]/40 backdrop-blur-xl p-6 rounded-xl shadow hover:shadow-[0_0_10px_rgba(108,99,255,0.3)]">
          <h3 className="text-[#0528f2] text-xl font-semibold mb-2">
            🖼️ Vision AI
          </h3>
          <p className="text-white font-semibold text-sm">
            Vision AI gives machines the power to see and interpret the world
            through images and video. It uses deep learning to detect objects,
            recognize faces, and understand complex visual scenes. From
            autonomous vehicles to healthcare imaging, Vision AI turns pixels
            into insights. It mimics human vision but with far greater speed and
            precision. With convolutional neural networks (CNNs) at its core,
            Vision AI can identify patterns invisible to the naked eye. This
            technology fuels smart cameras, security systems, and augmented
            reality — making the digital world visually intelligent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAimodel;
