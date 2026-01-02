import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const ViewsAllModels = () => {
  const models = useLoaderData();
  const [model, setModel] = useState(models);
  const [loading, setLoading] = useState(false);
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);

  // Available frameworks — you can also fetch dynamically if needed
  const frameworks = [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "HuggingFace",
  ];

  // Handle Search
  const handlsearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value.trim();
    if (search === "") {
      fetchModels();
      return;
    }
    setLoading(true);
    fetch(
      `https://ai-model-inventory-manager-server-ten.vercel.app/search?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // Handle Framework Selection
  const handleFrameworkChange = (framework) => {
    setSelectedFrameworks((prev) =>
      prev.includes(framework)
        ? prev.filter((f) => f !== framework)
        : [...prev, framework]
    );
  };

  // Fetch Models (with filter)
  const fetchModels = () => {
    setLoading(true);
    const query =
      selectedFrameworks.length > 0
        ? `?framework=${selectedFrameworks.join(",")}`
        : "";

    fetch(
      `https://ai-model-inventory-manager-server-ten.vercel.app/findmodels${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // Refetch whenever frameworks change
  useEffect(() => {
    fetchModels();
  }, [selectedFrameworks]);

  // Reset on clear
  const handleChange = (e) => {
    if (e.target.value === "") {
      fetchModels();
    }
  };

  return (
    <div className=" min-h-screen text-[#0F766E]">
      <h4 className="text-center text-3xl font-bold py-12">Available Models</h4>

      {/* Search Form */}
      <form
        onSubmit={handlsearch}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 px-4 mb-8"
      >
        <label className="flex items-center gap-2 w-full sm:w-72 px-4 py-2 bg-white rounded-full shadow-md">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            name="search"
            type="search"
            placeholder="Search models..."
            onChange={handleChange}
            className="outline-none bg-transparent text-black flex-1"
          />
        </label>

        <button
          type="submit"
          className="w-full sm:w-auto rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition font-medium"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Framework Filter */}
      <div className="flex flex-wrap justify-center gap-3 px-4 mb-10 pb-10">
        {frameworks.map((fw) => (
          <label
            key={fw}
            className={`flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer transition
        ${
          selectedFrameworks.includes(fw)
            ? "bg-blue-600 text-[#ECFEFF] shadow-md"
            : "bg-[#0F766E] text-[#ECFEFF] hover:bg-[#14B8A6]"
        }`}
          >
            <input
              type="checkbox"
              checked={selectedFrameworks.includes(fw)}
              onChange={() => handleFrameworkChange(fw)}
              className="w-4 h-4 accent-white bg-white border-none rounded-sm"
            />
            <span className="text-sm sm:text-base font-semibold">{fw}</span>
          </label>
        ))}
      </div>

      {/* Models Grid */}
      <div className="max-w-10/12 mt-6 m-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-y-11 gap-x-5 pb-12 felx-wrap">
        {loading ? (
          // <p className="text-center text-gray-400 col-span-full">Loading...</p>
          <LoadingSpinner></LoadingSpinner>
        ) : model.length > 0 ? (
          model.map((m) => <ModelCard model={m} key={m._id} />)
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No models found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewsAllModels;
