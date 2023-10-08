import {
  BubbleDataPoint,
  Chart,
  ChartArea,
  ChartTypeRegistry,
  Point,
} from "chart.js";

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

export function diagramGradient(
  ctx: CanvasRenderingContext2D,
  chartArea: ChartArea
) {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "#D5E1FD");
    gradient.addColorStop(1, "#1B59F8");
  }

  return gradient;
}
