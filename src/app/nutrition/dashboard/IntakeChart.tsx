'use client';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';

import { Chart } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: 'Weekly Statistics',
    // },
  },
};
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const IntakeChart = () => {
  const intakeData = {
    labels: days,
    datasets: [
      {
        type: 'line' as const,
        label: 'Weekly Caloric Intake',
        data: [2512, 2201, 2182, 2521, 2201, 2182, 2521],
        borderColor: '#03C9BA',
        borderWidth: 3,
      },
      {
        type: 'bar' as const,
        label: 'Protein',
        backgroundColor: '#FF9090',
        data: [120, 145, 205, 201, 125, 191, 200],
      },
      {
        type: 'bar' as const,
        label: 'Carbohydrate',
        backgroundColor: '#81BD83',
        data: [100, 105, 105, 101, 105, 91, 120],
      },
      {
        type: 'bar' as const,
        label: 'Fat',
        backgroundColor: '#F3F9AC',
        data: [50, 52, 45, 41, 25, 31, 25],
      },
    ],
  };

  return (
    <>
      <div className="mt-5 rounded-lg p-10 mx-[10rem] bg-neutral-900">
        <Chart type="bar" data={intakeData} />
      </div>
    </>
  );
};

export default IntakeChart;
