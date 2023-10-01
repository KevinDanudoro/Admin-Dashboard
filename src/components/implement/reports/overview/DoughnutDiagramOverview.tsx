import React from "react";
import type { FC } from "react";
import Card from "../../../custom/Card";
import DoughnutDiagram from "../../../custom/DoughnutDiagram";

interface DoughnutDiagramSegmentation {
  type: string;
  count: number;
}

interface DoughnutDiagramData {
  title: string;
  segmentation: DoughnutDiagramSegmentation[];
}

interface DoughnutDiagramOverviewProps {
  diagram: DoughnutDiagramData[];
}

const DoughnutDiagramOverview: FC<DoughnutDiagramOverviewProps> = (props) => {
  const { diagram } = props;
  return (
    <>
      {diagram.map((data) => {
        const count = data.segmentation.map((segmen) => segmen.count);
        const dataset = {
          label: data.title,
          data: data.segmentation.map((d) => d.count),
        };
        const labels = data.segmentation.map((d) => d.type);
        return (
          <Card
            key={data.title}
            className="col-span-2"
            title="Users"
            count={count.reduce((a, b) => a + b)}
          >
            <DoughnutDiagram dataset={dataset} labels={labels} />
          </Card>
        );
      })}
    </>
  );
};

export default DoughnutDiagramOverview;
