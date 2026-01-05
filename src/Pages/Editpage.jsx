import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "../Components/LoadingSpinner";
import { toast } from "react-toastify";

const Editpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);

  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch model once
  useEffect(() => {
    if (!user?.accessToken) return;

    setLoading(true);

    fetch(
      `https://ai-model-inventory-manager-server-dusky.vercel.app/models/${id}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch model");
        return res.json();
      })
      .then((data) => setModel(data))
      .catch(() => toast.error("❌ Failed to load model"))
      .finally(() => setLoading(false));
  }, [id, user?.accessToken]);

  // 🔹 Submit update
  const handleEdit = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedModel = {
      name: form.modelname.value.trim(),
      framework: form.framework.value.trim(),
      useCase: form.usecase.value.trim(),
      dataset: form.dataset.value.trim(),
      image: form.modelimg.value.trim(),
      description: form.description.value.trim(),
    };

    fetch(
      `https://ai-model-inventory-manager-server-dusky.vercel.app/models/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`, // 🔥 IMPORTANT
        },
        body: JSON.stringify(updatedModel),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("✅ Model updated successfully!");
          navigate(`/models/${id}`);
        } else {
          toast.info("ℹ️ No changes detected");
        }
      })
      .catch(() => toast.error("❌ Update failed"));
  };

  // 🔹 Loading state
  if (loading || !model) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-2xl bg-[#1E293B]/80 backdrop-blur-xl border border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.6)] rounded-2xl p-8 text-gray-200">

        <h2 className="text-3xl font-bold text-center text-[#6C63FF] mb-8">
          ✏️ Edit Model
        </h2>

        <form onSubmit={handleEdit} className="space-y-5">

          {/* Image */}
          <div>
            <label className="font-semibold">Model Image URL</label>
            <input
              defaultValue={model.image}
              name="modelimg"
              type="text"
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-gray-500 focus:border-indigo-400 outline-none"
            />
          </div>

          {/* Name */}
          <div>
            <label className="font-semibold">Model Name</label>
            <input
              defaultValue={model.name}
              name="modelname"
              type="text"
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-gray-500 focus:border-indigo-400 outline-none"
            />
          </div>

          {/* Framework & Use Case */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Framework</label>
              <input
                defaultValue={model.framework}
                name="framework"
                type="text"
                required
                className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-gray-500 focus:border-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold">Use Case</label>
              <input
                defaultValue={model.useCase}
                name="usecase"
                type="text"
                required
                className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-gray-500 focus:border-indigo-400 outline-none"
              />
            </div>
          </div>

          {/* Dataset */}
          <div>
            <label className="font-semibold">Dataset</label>
            <input
              defaultValue={model.dataset}
              name="dataset"
              type="text"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-gray-500 focus:border-indigo-400 outline-none"
            />
          </div>

          {/* Purchased (readonly) */}
          <div>
            <label className="font-semibold">Purchased Count</label>
            <input
              value={model.dowloded_by?.length || 0}
              readOnly
              className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-400 cursor-not-allowed"
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold">Description</label>
            <textarea
              defaultValue={model.description}
              name="description"
              rows="4"
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-gray-500 focus:border-indigo-400 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-semibold shadow-lg"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold"
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
