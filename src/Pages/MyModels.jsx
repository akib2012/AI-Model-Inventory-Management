import React, { useContext, useEffect, useState } from "react";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "../Components/LoadingSpinner";
import { toast } from "react-toastify";
import { Link } from "react-router";

const MyModels = () => {
  const { user, loading, setLoading } = useContext(Authcontext);
  const [mymodel, setMymodel] = useState([]);
  console.log(mymodel);
  //   console.log(user?.email);

  useEffect(() => {
    fetch(
      `https://ai-model-inventory-manager-server-ten.vercel.app/my-models?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.success("submit your model")
        setMymodel(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching models:", err));
  }, [user?.email, setLoading, setMymodel, user?.accessToken]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-10/12 m-auto rounded-2xl my-6 px-4">
      <h4 className="text-center text-3xl font-bold py-6 text-black">
        My Model{" "}
      </h4>

      {mymodel.length === 0 ? (
        <div>
          <h3 className="text-center text-2xl text-white">No model found 😢</h3>
        </div>
      ) : (
        mymodel.map((model) => (
          <div key={model._id} className="my-4">
            <div className="rounded-2xl flex flex-col sm:flex-row sm:items-center border border-gray-700 p-4 bg-gray-900 text-gray-100 gap-4 sm:gap-6">
              {/* Image */}
              <div className="w-full sm:w-20 h-32 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Model Info */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-6 text-center sm:text-left">
                <div className="font-semibold text-lg sm:text-base">
                  {model.name}
                </div>
                <div className="text-gray-300">{model.framework}</div>
                <div className="text-gray-300">{model.useCase}</div>
                <div className="text-gray-300">{model.createdBy}</div>
              </div>

              {/* View Button */}
              <div className="flex justify-center sm:justify-end">
                <Link to={`/models/${model._id}`}>
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-2.5 px-5 text-center font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-90 active:opacity-85 disabled:opacity-50"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyModels;
