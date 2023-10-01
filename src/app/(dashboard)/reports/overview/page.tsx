import DoughnutDiagramOverview from "@/components/implement/reports/overview/DoughnutDiagramOverview";
import SelectFilterOverview from "@/components/implement/reports/overview/SelectFilterOverview";

const api = {
  diagram: [
    {
      title: "users",
      segmentation: [
        {
          type: "new",
          count: 112,
        },
        {
          type: "returning",
          count: 512,
        },
        {
          type: "inactive",
          count: 90,
        },
      ],
    },
    {
      title: "subscription",
      segmentation: [
        {
          type: "paid",
          count: 512,
        },
        {
          type: "free",
          count: 194,
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <section>
      <div className="flex justify-between items-center capitalize caption mb-6">
        <SelectFilterOverview />
        <span className="cursor-pointer">download</span>
      </div>
      <div className="grid grid-cols-6 auto-rows-fr gap-4">
        <DoughnutDiagramOverview diagram={api.diagram} />
      </div>
    </section>
  );
}
