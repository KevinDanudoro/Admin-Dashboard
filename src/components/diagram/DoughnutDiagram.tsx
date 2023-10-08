"use client";

import React from "react";
import type { FC } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { cn, customLabel } from "@/lib/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutDiagramProps extends React.HTMLAttributes<HTMLDivElement> {
  labels: string[];
  dataset: {
    label: string;
    data: number[];
  };
}

const DoughnutDiagram: FC<DoughnutDiagramProps> = (props) => {
  const { className, labels, dataset, ...resProps } = props;

  const data = {
    labels: labels,
    datasets: [
      {
        label: dataset.label,
        data: dataset.data,
        backgroundColor: ["#1B59F8", "#769BFA", "#D5E1FD"],
        borderRadius: 8,
        spacing: 4,
      },
    ],
  };

  return (
    <div className={cn("w-full flex justify-end", className)} {...resProps}>
      <Doughnut
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "left",
              align: "center",
              labels: {
                usePointStyle: true,
                pointStyle: "rectRounded",
                pointStyleWidth: 30,
                generateLabels: (e: ChartJS) => customLabel(e),
              },
            },
          },
        }}
        data={data}
      />
    </div>
  );
};

export default DoughnutDiagram;
