import React, { useEffect, useState } from "react";
import ModelCard from "../Components/ModelCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const ViewsAllModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [frameworksSelected, setFrameworksSelected] = useState([]);

  const frameworks = ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "HuggingFace"];

  // 🔥 Fetch function
  const fetchModels = async (currentSearch = search, currentFrameworks = frameworksSelected) => {
    setLoading(true);

    const params = new URLSearchParams();

    if (currentSearch.trim()) {
      params.append("search", currentSearch.trim());
    }

    if (currentFrameworks.length) {
      params.append("framework", currentFrameworks.join(","));
    }

    const url = `https://ai-model-inventory-manager-server-dusky.vercel.app/findmodels?${params.toString()}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setModels(data);
    } catch (err) {
      console.error(err);
      setModels([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔄 Load initially + when filter changes
  useEffect(() => {
    fetchModels();
  }, [frameworksSelected]);

  // 🔍 Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchModels(search, frameworksSelected);
  };

  // ☑️ Toggle framework
  const toggleFramework = (fw) => {
    setFrameworksSelected((prev) =>
      prev.includes(fw) ? prev.filter((f) => f !== fw) : [...prev, fw]
    );
  };

  return (
    <div className="min-h-screen text-[#0F766E]">
      <h4 className="text-center text-3xl font-bold py-12">Available Models</h4>

      {/* 🔍 Search */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col sm:flex-row justify-center gap-3 mb-8 px-4"
      >
        <input
          type="search"
          placeholder="Search models..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            px-4 py-2 w-full sm:w-72 rounded-full shadow 
            bg-white text-black placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400
            dark:focus:ring-blue-400
            transition-colors
          "
        />

        <button
          type="submit"
          className="
            px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600
            text-white shadow-lg hover:from-blue-700 hover:to-teal-700
            dark:from-blue-500 dark:to-teal-500 dark:hover:from-blue-600 dark:hover:to-teal-600
            transition-all
          "
        >
          Search
        </button>
      </form>

      {/* 🎯 Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {frameworks.map((fw) => (
          <label
            key={fw}
            className={`px-3 py-2 rounded-full cursor-pointer ${
              frameworksSelected.includes(fw)
                ? "bg-blue-600 text-white"
                : "bg-teal-600 text-white"
            }`}
          >
            <input
              type="checkbox"
              className="mr-2"
              checked={frameworksSelected.includes(fw)}
              onChange={() => toggleFramework(fw)}
            />
            {fw}
          </label>
        ))}
      </div>

      {/* 📦 Models */}
      <div className="max-w-10/12 mt-8 m-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <LoadingSpinner />
        ) : models.length ? (
          models.map((m) => <ModelCard key={m._id} model={m} />)
        ) : (
          <p className="col-span-full text-center text-gray-400">No models found</p>
        )}
      </div>
    </div>
  );
};

export default ViewsAllModels;
