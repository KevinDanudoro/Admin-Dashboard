import { OverviewResponse } from "@/api/response";

export function doughnutDiagramMapper(overviewDatas: OverviewResponse) {
  const diagramData = [];

  for (const data of overviewDatas.diagram) {
    const total = data.segmentation
      .map((segmen) => segmen.count)
      .reduce((a, b) => a + b);

    const dataset = {
      label: data.title,
      data: data.segmentation.map((d) => d.count),
    };

    const labels = data.segmentation.map((d) => d.type);

    diagramData.push({ total, dataset, labels });
  }

  return diagramData;
}
