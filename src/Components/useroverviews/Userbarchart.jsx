import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const Userbarchart = () => {
  // 🔹 Data: Category vs Model Count
  const data = [
    { category: "Computer Vision", models: 12 },
    { category: "NLP", models: 18 },
    { category: "Recommendation", models: 9 },
    { category: "Audio", models: 6 },
    { category: "Time Series", models: 11 },
  ];

  // 🔹 Color for bars and title
  const deepTealGreen = "#0F766E";

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      {/* 🔹 Chart Title */}
      <h2
        className="text-xl font-bold mb-6"
        style={{ color: deepTealGreen }}
      >
        Category vs Model Count
      </h2>

      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          label={{
            value: "Category",
            position: "insideBottom",
            offset: -10,
            fill: deepTealGreen,
          }}
        />
        <YAxis
          label={{
            value: "Number of Models",
            angle: -90,
            position: "insideLeft",
            fill: deepTealGreen,
          }}
        />
        <Tooltip />
        <Bar
          dataKey="models"
          fill={deepTealGreen}
          radius={[6, 6, 0, 0]} // rounded top corners
        />
        <RechartsDevtools />
      </BarChart>
    </div>
  );
};

export default Userbarchart;
