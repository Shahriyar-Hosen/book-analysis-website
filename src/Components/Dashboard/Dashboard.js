import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
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
        <div className="shadow-lg shadow-gray-500 rounded-2xl  bg-cyan-50 p-4">
          <h1 className="mb-5 text-2xl font-serif font-extrabold leading-tight tracking-tight text-center text-[#1d10da] md:text-3xl">
          Investment VS Revenue
          </h1>
          <BarChart
      width={500}
      height={300}
      data={chartsData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" stackId="a" fill="#8884d8" />
      <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
    </BarChart>
        </div>
        <div className="shadow-lg shadow-gray-500 rounded-2xl  bg-cyan-50 p-4">
          <h1 className="mb-5 text-2xl font-serif font-extrabold leading-tight tracking-tight text-center text-[#1d10da] md:text-3xl">
          Investment VS Revenue
          </h1>
          <PieChart width={400} height={400}>
      <Pie
        data={chartsData}
        dataKey="investment"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={chartsData}
        dataKey="revenue"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
