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
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Models</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Model Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Created By</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model._id} className="border-t">
                <td className="p-3">{model.name}</td>
                <td className="p-3">{model.framework}</td>
                <td className="p-3">{model.createdBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
