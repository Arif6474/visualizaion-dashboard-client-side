import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import useData from '../../hooks/useData';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const RadarChart = () => {
  const [data, setData] = useData({});
    const RadarData = {
        labels:data.map((d) => d.source),
        datasets: [
          {
            label: 'sector',
            data:data.map((d) => d.intensity),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'topic',
            data:data.map((d) => d.relevance),
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };
      
    return (
        <div>
            <Radar data={RadarData} />
        </div>
    );
};

export default RadarChart;