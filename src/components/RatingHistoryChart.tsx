import React from 'react';
import {
  Chart as ChartJS,
  TimeScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Models } from 'appwrite';
import useListRecords from '../hooks/useListRecords';
import { blue } from '@mui/material/colors';

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      text: 'Chart.js Time Scale',
      display: true,
    },
  },
  scales: {
    x: {
      type: 'time',
      time: {
        // Luxon format string
        tooltipFormat: 'DD T',
      },
      title: {
        display: true,
        text: 'Date',
      },
    },
    y: {
      title: {
        display: true,
        text: 'value',
      },
    },
  },
};
// export const options = {
//   responsive: true,
//   scales: {
//     x: {
//       type: 'time',
//       display: true,
//       CartesianScaleOptions: 'min',
//     },
//     y: {
//       display: true,
//     },
//   },
// };

function RatingHistoryChart({
  account,
  records,
}: {
  account: Models.Document;
  records: Models.Document[] | undefined;
}) {
  const chartRecords = records ? [...records].reverse() : [];
  //   const labels = chartRecords.map((record) => new Date(record.$createdAt));
  const data = chartRecords.map((record) => ({
    x: new Date(record.$createdAt),
    y: record.rating,
  }));

  //   console.log(data);

  const chartData = {
    type: 'line',
    datasets: [
      {
        label: 'test',
        data,
        borderColor: blue[500],
        backgroundColor: blue[500],
      },
    ],
  };

  return <></>;
  //   return <Line options={options} data={chartData} />;
}

export default RatingHistoryChart;
