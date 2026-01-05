const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#0F766E] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About AI Model Inventory Manager
          </h1>
          <p className="text-lg text-cyan-100">
            A modern platform built to manage, explore, and track AI models with
            real-world workflows.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#0F766E] mb-4">
              Project Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The AI Model Inventory Manager is designed to simulate how AI
              platforms like Hugging Face or Model Zoo organize and manage AI
              models. Users can add, update, delete, and purchase models while
              tracking real-time usage data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0F766E] mb-4">
              Learning Outcome
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This project bridges frontend and backend development using
              industry-standard tools such as React, Firebase Authentication,
              Node.js, Express, and MongoDB.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Secure Authentication",
              "Real-time Purchase Tracking",
              "Scalable REST API",
              "Responsive UI Design",
            ].map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 hover:shadow-md transition"
              >
                <div className="w-10 h-10 bg-[#22D3EE] rounded-full mb-4"></div>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
