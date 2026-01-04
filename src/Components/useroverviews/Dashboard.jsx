import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [models, setModels] = useState([]);
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    // Fetch overview cards data
    fetch("http://localhost:3000/dashboard-stats", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setStats(data));

    // Fetch table data
    fetch("http://localhost:3000/dashboard-models", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setModels(data));
  }, [token]);

  if (!stats) return <p className="mt-10 text-center">Loading...</p>;

  return (
    <div className="p-6 space-y-8">
      {/* 🔹 Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Models" value={stats.totalModels} />
        <Card title="My Models" value={stats.myModels} />
        <Card title="Total Users" value={stats.totalUsers} />
      </div>

      {/* 🔹 Dynamic Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-[#0F766E] dark:text-[#0F766E]">
          Recent Models
        </h2>

        {/* 🔹 Responsive wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                <th className="p-3 text-gray-700 dark:text-gray-200">
                  Model Name
                </th>
                <th className="p-3 text-gray-700 dark:text-gray-200">
                  Category
                </th>
                <th className="p-3 text-gray-700 dark:text-gray-200">
                  Created By
                </th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr
                  key={model._id}
                  className="border-t border-gray-200 dark:border-gray-600"
                >
                  <td className="p-3 text-gray-800 dark:text-gray-100">
                    {model.name}
                  </td>
                  <td className="p-3 text-gray-800 dark:text-gray-100">
                    {model.framework}
                  </td>
                  <td className="p-3 text-gray-800 dark:text-gray-100">
                    {model.createdBy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-gray-300 rounded-xl shadow p-6 text-center">
    <h3 className="text-sm" style={{ color: "#0F766E" }}>
      {title}
    </h3>
    <p className="text-3xl font-bold mt-2" style={{ color: "#0F766E" }}>
      {value}
    </p>
  </div>
);

export default Dashboard;
