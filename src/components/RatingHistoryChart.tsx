import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';
import 'chartjs-adapter-moment';
import { Line } from 'react-chartjs-2';
import { Models } from 'appwrite';
import { blue, red } from '@mui/material/colors';
import moment from 'moment';
import { Box, Paper, useMediaQuery, useTheme } from '@mui/material';

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

function RatingHistoryChart({
  account,
  records,
}: {
  account: Models.Document;
  records: Models.Document[] | undefined;
}) {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('sm'));

  const chartRecords = records ? [...records].reverse() : [];
  const ratingData = chartRecords.map((record) => ({
    x: record.$createdAt,
    y: record.rating,
  }));

  const options = {
    plugins: {
      title: {
        text: `${account.accountName}'s rating history`,
        display: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: 'time' as const,
        time: {
          // Luxon format string
          tooltipFormat: 'LLL',
        },
        //   min: moment().subtract(1, 'days').toISOString(),
      },
    },
  };

  const chartData = {
    type: 'line',
    datasets: [
      {
        label: 'Rating',
        data: ratingData,
        borderColor: blue[500],
        backgroundColor: blue[500],
      },
    ],
  };

  return (
    <Paper>
      <Box p={match ? 2 : 0}>
        <Line options={options} data={chartData} />
      </Box>
    </Paper>
  );
}

export default RatingHistoryChart;
