import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import useData from "../../hooks/useData";
import Likelihood from "./Likelihood";
import RadarChart from "./RadarChart";
import Topic from "./Topic";
import VisualizationTable from "./VisualizationTable";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Sector = () => {
  const [data, setData] = useData({});
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Intensity",
        data: data.map((d) => d.intensity),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Relevance",
        data: data.map((d) => d.relevance),
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };
  return (
    <div className="flex flex-col container">
      <div className="flex lg:flex-row flex-col justify-around">
        <div className="lg:basis-2/4 p-8">
          <Likelihood />
        </div>

        <div className="lg:basis-2/4 p-8">
          <Bar options={options} data={chartData} />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-around">
      <div className="basis-2/5 p-8">
        <Topic/>
      </div>
      <div className="basis-2/5 p-8">
        <RadarChart />
      </div>
      </div>
      <div>
        <VisualizationTable/>
      </div>
    </div>
  );
};

export default Sector;
