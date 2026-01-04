import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "../Components/LoadingSpinner";


const UserMyPurchases = () => {
  const { user, loading, setLoading } = useContext(Authcontext);
  const [purchase, setPurchase] = useState([]);

  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    setLoading(true);

    fetch(
      `https://ai-model-inventory-manager-server-ten.vercel.app/my-Purchase?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Purchase API response 👉", data);

        
        setPurchase(data.models || []);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching purchases:", err);
        setLoading(false);
      });
  }, [user?.email, user?.accessToken, setLoading]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        You have purchased {purchase.length} model
        {purchase.length !== 1 ? "s" : ""}
      </h2>

      <div className="overflow-x-auto p-6">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Model</th>
              <th>Framework</th>
              <th>Dataset</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {purchase.map((model, index) => (
              <tr key={model._id}>
                <th>{index + 1}</th>

                <td className="flex items-center gap-2">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span>{model.name}</span>
                </td>

                <td>{model.framework}</td>
                <td>{model.dataset}</td>

                <td>
                  <Link
                    to={`/models/${model._id}`}
                    className="btn btn-xs btn-primary"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {purchase.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No purchases found.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserMyPurchases;
