import React, { useContext, useEffect, useState } from "react";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "../Components/LoadingSpinner";
import { toast } from "react-toastify";
import { Link } from "react-router";

const MyModels = () => {
  const { user } = useContext(Authcontext);

  const [mymodel, setMymodel] = useState([]);
  const [pageLoading, setPageLoading] = useState(true); // ✅ LOCAL loading

  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    setPageLoading(true);

    fetch(
      `https://ai-model-inventory-manager-server-dusky.vercel.app/my-models`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMymodel(data.models || []);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load models");
      })
      .finally(() => {
        setPageLoading(false);
      });
  }, [user?.email, user?.accessToken]); // ✅ SAFE deps

  if (pageLoading) return <LoadingSpinner />;

  return (
    <div className="max-w-10/12 m-auto rounded-2xl my-6 px-4">
      <h4 className="text-center text-3xl font-bold py-6 text-[#0F766E]">
        My Models
      </h4>

      {mymodel.length === 0 ? (
        <h3 className="text-center text-2xl text-[#0F766E]">
          No model found 😢
        </h3>
      ) : (
        mymodel.map((model) => (
          <div key={model._id} className="my-4">
            <div className="rounded-2xl flex flex-col sm:flex-row sm:items-center border border-gray-700 p-4 bg-gray-900 text-gray-100 gap-4">
              <div className="w-full sm:w-20 h-32 sm:h-16 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 grid sm:grid-cols-4 gap-4">
                <div className="font-semibold">{model.name}</div>
                <div>{model.framework}</div>
                <div>{model.useCase}</div>
                <div>{model.createdBy}</div>
              </div>

              <Link to={`/models/${model._id}`}>
                <button className="bg-blue-500 px-5 py-2 rounded-lg font-bold">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyModels;
