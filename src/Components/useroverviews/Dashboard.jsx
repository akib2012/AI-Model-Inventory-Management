import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import LoadingSpinner from "../LoadingSpinner";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;

    user.getIdToken().then((token) => {
      const headers = { Authorization: `Bearer ${token}` };
      const baseUrl =
        "https://ai-model-inventory-manager-server-dusky.vercel.app";

      Promise.all([
        fetch(`${baseUrl}/dashboard-stats`, { headers }).then((res) =>
          res.json()
        ),
        fetch(`${baseUrl}/dashboard-models`, { headers }).then((res) =>
          res.json()
        ),
      ])
        .then(([statsData, modelsData]) => {
          setStats(statsData);
          setModels(Array.isArray(modelsData) ? modelsData : []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Dashboard Error:", err);
          setLoading(false);
        });
    });
  }, []);

  if (loading || !stats) {
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <div className="p-6 space-y-8">
      {/* ================= Overview Cards ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Models" value={stats.totalModels} />
        <StatCard title="Total Users" value={stats.totalUsers} />
        <StatCard title="Total Downloads" value={stats.totalDownloads} />
      </div>

      {/* ================= Models Table ================= */}
      <div className="bg-white dark:bg-gray-900 shadow rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-[#0F766E] text-left">Model Name</th>
              <th className="px-4 py-3 text-[#0F766E] text-left">Framework</th>
              <th className="px-4 py-3 text-[#0F766E] text-center">Downloads</th>
              <th className="px-4 py-3 text-[#0F766E] text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            {models.length > 0 ? (
              models.map((model) => (
                <tr key={model._id} className="border-t dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-100">
                    {model.name}
                  </td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {model.framework}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-800 dark:text-gray-100">
                    {model.downloads || 0}
                  </td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {new Date(model.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-500 dark:text-gray-400"
                >
                  No models found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ================= Stat Card Component ================= */
const StatCard = ({ title, value }) => {
  return (
    <div
      className="
        bg-white dark:bg-gray-900
        rounded-xl shadow
        p-6 border-l-4 border-[#0F766E]
        hover:shadow-lg transition
      "
    >
      <p className="text-sm uppercase font-semibold tracking-wider text-[#0F766E]">
        {title}
      </p>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-2">
        {value}
      </h2>
    </div>
  );
};

export default Dashboard;
