import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Authcontext from "../ContextAuth/Authcontext";

const AddnewModel = () => {
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();

  const handleAddModel = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = {
      name: formData.get("modelname"),
      framework: formData.get("framework"),
      useCase: formData.get("usecase"),
      dataset: formData.get("dataset"),
      description: formData.get("description"),
      image: formData.get("modelimg"),
      createdBy: user?.email,
      createdAt: new Date(),
      purchased: 0,
    };

    fetch("https://ai-model-inventory-manager-server-ten.vercel.app/models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("🚀 Model synchronized successfully!");
          e.target.reset();
          navigate("/viewsallmodels");
        } else {
          toast.error("⚠️ System error, try again.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex justify-center items-center px-4 py-16 min-h-screen">
      {/* Main Container with subtle outer glow */}
      <div className="relative w-full max-w-3xl group">
        
        {/* Animated Neon Border Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0F766E] via-[#0528F2] to-[#0F766E] rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

        {/* The Card */}
        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden">
          
          {/* Subtle internal gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-50"></div>

          <div className="text-center mb-10">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#2DD4BF] font-bold mb-2">System Entry</h2>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Add <span className="text-[#0528F2]">AI</span> Model
            </h1>
          </div>

          <form onSubmit={handleAddModel} className="space-y-5">
            {/* Input Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { name: "modelname", label: "Model Name" },
                { name: "framework", label: "Framework" },
                { name: "usecase", label: "Use Case" },
                { name: "dataset", label: "Dataset" },
              ].map((input) => (
                <div key={input.name} className="relative">
                  <input
                    name={input.name}
                    required
                    placeholder=" "
                    className="peer w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder-transparent focus:border-[#0528F2] focus:ring-0 outline-none transition-all"
                  />
                  <label className="absolute left-5 top-4 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#2DD4BF] peer-focus:bg-[#0a0a0a] peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0a0a0a] peer-[:not(:placeholder-shown)]:px-2">
                    {input.label}
                  </label>
                </div>
              ))}
            </div>

            {/* Image URL */}
            <div className="relative">
              <input
                name="modelimg"
                placeholder=" "
                className="peer w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder-transparent focus:border-[#0528F2] outline-none transition-all"
              />
              <label className="absolute left-5 top-4 text-white/40 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#2DD4BF] peer-focus:bg-[#0a0a0a] peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0a0a0a] peer-[:not(:placeholder-shown)]:px-2">
                Image URL
              </label>
            </div>

            {/* Description */}
            <div className="relative">
              <textarea
                name="description"
                rows="3"
                placeholder=" "
                className="peer w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder-transparent focus:border-[#0528F2] outline-none transition-all"
              ></textarea>
              <label className="absolute left-5 top-4 text-white/40 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#2DD4BF] peer-focus:bg-[#0a0a0a] peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0a0a0a] peer-[:not(:placeholder-shown)]:px-2">
                Description
              </label>
            </div>

            {/* Creator Badge (Enhanced) */}
            <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-white/40 text-xs font-bold uppercase tracking-tighter">Creator Account</span>
              <span className="text-[#2DD4BF] font-mono text-sm">{user?.email}</span>
            </div>

            {/* Powerful Submit Button */}
            <button
              type="submit"
              className="w-full relative group/btn overflow-hidden py-5 rounded-2xl bg-[#0528F2] text-white font-black text-lg tracking-widest uppercase transition-all hover:shadow-[0_0_30px_rgba(5,40,242,0.4)] active:scale-95"
            >
              <span className="relative z-10">Initialize Deployment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddnewModel;