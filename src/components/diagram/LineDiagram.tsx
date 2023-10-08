"use client";

import React from "react";
import type { FC } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { diagramGradient } from "@/lib/utils";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface LineDiagramProps {}

const LineDiagram: FC<LineDiagramProps> = ({}) => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
        beginAtZero: true,
      },
      y: {
        grid: {
          drawOnChartArea: false,
        },
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        fill: false,
        tension: 0.5,
        borderWidth: 7,
      },
      point: {
        radius: 5,
        borderWidth: 4,
        hoverRadius: 7,
        hitRadius: 20,
      },
    },
  };

  const data = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [0, 100, 80, 30, 180, 200, 300, 230, 400, 200, 240, 500],
        backgroundColor: "#1B59F8",
        borderColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return;
          return diagramGradient(ctx, chartArea);
        },
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineDiagram;
