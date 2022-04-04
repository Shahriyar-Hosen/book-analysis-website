import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [chartsData, setChartsData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChartsData(data));
  }, []);

  return (
    <section className="mt-20 mb-20 px-4 py-2 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-10">
        <div className="shadow-lg shadow-gray-500 rounded-2xl  bg-cyan-50 p-4">
          <h1 className="mb-5 text-2xl font-serif font-extrabold leading-tight tracking-tight text-center text-[#1d10da] md:text-3xl">
            Month Wise Sale
          </h1>
          <LineChart width={500} height={350} data={chartsData}>
            <Line
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              circle={10}
              strokeWidth={3}
            />
            <XAxis dataKey={"month"}></XAxis>
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>
        <div className="shadow-lg shadow-gray-500 rounded-2xl  bg-cyan-50 p-4">
          <h1 className="mb-5 text-2xl font-serif font-extrabold leading-tight tracking-tight text-center text-[#1d10da] md:text-3xl">
          Investment VS Revenue
          </h1>
          <AreaChart width={500} height={350} data={chartsData} circle={10}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="investment"
              stackId="1"
              stroke="#8884d8"
              fill="#7ff885"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stackId="1"
              stroke="#82ca9d"
              fill="#ffc658"
            />
          </AreaChart>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
