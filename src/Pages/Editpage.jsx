import React, { useContext, useEffect, useState } from "react";
import Authcontext from "../ContextAuth/Authcontext";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import { toast } from "react-toastify";

const Editpage = () => {
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();

  // Fetch model data
  useEffect(() => {
    if (!user?.accessToken) return;

    setLoading(true);
    fetch(
      `https://ai-model-inventory-manager-server-ten.vercel.app/models/${id}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, user]);

  // Handle form submit
  const handledit = (e) => {
    e.preventDefault();

    const newModel = {
      name: e.target.modelname.value,
      framework: e.target.framework.value,
      useCase: e.target.usecase.value,
      dataset: e.target.dataset.value,
      image: e.target.modelimg.value,
      description: e.target.description.value,
      createdBy: user.email,
      createdAt: new Date(),
      purchased: model.purchased || 0,
    };

    fetch(
      `https://ai-model-inventory-manager-server-ten.vercel.app/models/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newModel),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("✅ Model updated successfully!");
          navigate(`/models/${id}`);
        } else {
          toast.warning("⚠️ No changes detected.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("❌ Update failed!");
      });
  };

  // Show spinner if still loading
  if (loading) {
    return <LoadingSpinner />;
  }

  const { name, image, purchased, useCase, description, framework, dataset } =
    model;

  return (
    <div>
      <h3 className="text-center text-2xl font-bold text-white mb-6">
        Edit Model Page
      </h3>

      <div className="my-17  bg-[#1E293B]/80 backdrop-blur-xl border-2 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.6)] rounded-2xl p-8 w-full max-w-2xl text-gray-200 mx-auto transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.9)]">
        <h1 className="text-3xl font-bold text-[#6C63FF] text-center mb-6">
          Edit Model
        </h1>

        <form onSubmit={handledit} className="space-y-6">
          {/* Image URL */}
          <div className="border-2 border-indigo-400 rounded-xl p-4 flex flex-col items-center justify-center bg-[#0F172A]/50">
            <label className="text-gray-300 mb-2 font-semibold">
              Model Image
            </label>
            <input
              type="text"
              defaultValue={image}
              placeholder="Enter image URL"
              name="modelimg"
              className="w-full px-3 py-2 rounded-lg bg-transparent border border-gray-500 focus:border-indigo-400 outline-none"
            />
          </div>

          {/* Model Name */}
          <div>
            <label className="text-gray-300 font-semibold">Model Name</label>
            <input
              defaultValue={name}
              type="text"
              placeholder="Enter model name"
              name="modelname"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0F172A]/60 border border-gray-600 focus:border-indigo-400 outline-none"
            />
          </div>

          {/* Framework & Use Case */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 font-semibold">Framework</label>
              <input
                type="text"
                defaultValue={framework}
                placeholder="e.g., TensorFlow"
                name="framework"
                className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0F172A]/60 border border-gray-600 focus:border-indigo-400 outline-none"
              />
            </div>
            <div>
              <label className="text-gray-300 font-semibold">Use Case</label>
              <input
                type="text"
                defaultValue={useCase}
                placeholder="e.g., Object Detection"
                name="usecase"
                className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0F172A]/60 border border-gray-600 focus:border-indigo-400 outline-none"
              />
            </div>
          </div>

          {/* Dataset & Purchased */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 font-semibold">Dataset</label>
              <input
                type="text"
                defaultValue={dataset}
                name="dataset"
                placeholder="e.g., COCO"
                className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0F172A]/60 border border-gray-600 focus:border-indigo-400 outline-none"
              />
            </div>
            <div>
              <label className="text-gray-300 font-semibold">
                Purchased Count
              </label>
              <input
                readOnly
                value={purchased || 0}
                className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0F172A]/60 border border-gray-600 text-gray-400 outline-none cursor-not-allowed"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 font-semibold">Description</label>
            <textarea
              rows="4"
              defaultValue={description}
              name="description"
              placeholder="Enter model description..."
              className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0F172A]/60 border border-gray-600 focus:border-indigo-400 outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-xl font-semibold shadow-lg transition-all"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-5 py-2 rounded-xl font-semibold transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editpage;
