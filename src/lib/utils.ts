import { BubbleDataPoint, Chart, ChartTypeRegistry, Point } from "chart.js";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function customLabel(
  chart: Chart<
    keyof ChartTypeRegistry,
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >
) {
  const data = chart.data;
  if (
    data.labels?.length &&
    data.datasets.length &&
    chart.legend != undefined
  ) {
    const {
      labels: { pointStyle },
    } = chart.legend.options;

    const max = data.datasets[0].data.reduce(
      (a, b) => (a != null ? (a as number) + (b as number) : b),
      0
    );

    return data.labels.map((label, i) => {
      const meta = chart.getDatasetMeta(0);
      const style = meta.controller.getStyle(i, false);

      return {
        text: `${(
          ((data.datasets[0].data[i] as number) * 100) /
          (max as number)
        ).toFixed(0)}% ${label}`,
        fillStyle: style.backgroundColor,
        strokeStyle: style.borderColor,
        lineWidth: style.borderWidth,
        pointStyle: pointStyle,
        hidden: !chart.getDataVisibility(i),
        index: i,
      };
    });
  }
  return [];
}
