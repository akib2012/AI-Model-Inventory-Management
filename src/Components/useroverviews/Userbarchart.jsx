import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const Userbarchart = () => {
  const data = [
    { name: "Page A", uv: 400 },
    { name: "Page B", uv: 300 },
    { name: "Page C", uv: 300 },
    { name: "Page D", uv: 200 },
    { name: "Page E", uv: 278 },
    { name: "Page F", uv: 189 },
  ];

  const margin = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 25,
  };

  const formatAxisTick = (value) => `*${value}*`;

  const renderCustomBarLabel = ({ x, y, width, value }) => (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >
      {value}
    </text>
  );

  return (
    <BarChart width={600} height={300} data={data} margin={margin}>
      <XAxis
        dataKey="name"
        tickFormatter={formatAxisTick}
        label={{
          value: "XAxis title",
          position: "insideBottomRight",
          offset: -10,
        }}
      />
      <YAxis
        label={{
          value: "YAxis title",
          angle: -90,
          position: "insideLeft",
        }}
      />
      <Bar dataKey="uv" fill="#8884d8" label={renderCustomBarLabel} />
      <RechartsDevtools />
    </BarChart>
  );
};

export default Userbarchart;
