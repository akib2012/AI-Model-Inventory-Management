import React, { useEffect, useState } from "react";
import ModelCard from "./ModelCard";

const RecentModel = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(
      "https://ai-model-inventory-manager-server-ten.vercel.app/recent-model"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // check what the API returns
        setModels(data.data ? data.data : data); // fallback if data is an array
      })
      .catch((err) => console.error("Error fetching recent models:", err));
  }, []);

  return (
    <div>
      <h4 className="text-center text-3xl font-bold py-6 text-[#0F766E]">
        most recently added{" "}
      </h4>
      <div className="max-w-10/12 m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-11 gap-x-5 my-13 pb-6 flex-wrap">
        {models.map((model) => (
          <ModelCard model={model} key={model.id}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default RecentModel;
