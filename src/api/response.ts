export interface DiagramSegmentation {
  type: string;
  count: number;
}

export interface DiagramData {
  title: string;
  segmentation: DiagramSegmentation[];
}

export interface OverviewResponse {
  diagram: DiagramData[];
}
