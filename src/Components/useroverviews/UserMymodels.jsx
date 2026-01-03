import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Line } from "recharts";
import { Link } from "react-router";

const UserMymodels = () => {
  const [models, setModels] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken(); // Firebase JWT

        // Fetch user's models
        const res = await fetch("http://localhost:3000/my-models", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setModels(data.models);
        setCount(data.count);
      }
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        You have created {count} model{count !== 1 ? "s" : ""}
      </h2>
      <div className="overflow-x-auto p-6">
         

        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Model Name</th>
              <th>Framework</th>
              <th>Dataset</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {models.map((model, index) => (
              <tr key={model._id}>
                <th>{index + 1}</th>
                <td className="flex items-center gap-2">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  {model.name}
                </td>
                <td>{model.framework}</td>
                <td>{model.dataset}</td>
                <td className="flex gap-2">
                  <Link to={`/models/${model._id}`} className="btn btn-xs btn-primary">View</Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserMymodels;
