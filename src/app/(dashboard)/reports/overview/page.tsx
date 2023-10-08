import dynamic from "next/dynamic";

import Card1 from "@/components/card/Card1";
import Card2 from "@/components/card/Card2";
import List from "@/components/list/List";

import { doughnutDiagramMapper } from "@/lib/mapper";
import { Download } from "lucide-react";

const DynamicDoughnutDiagram = dynamic(
  () => import("@/components/diagram/DoughnutDiagram"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicStackedbarDiagram = dynamic(
  () => import("@/components/diagram/StackedbarDiagram"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicLineDiagram = dynamic(
  () => import("@/components/diagram/LineDiagram"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicSelectFilter = dynamic(
  () => import("@/components/filter/SelectFilterOverview"),
  {
    loading: () => <p>Loading...</p>,
  }
);

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
  card: [
    {
      title: "Jojo",
      total: 21200,
    },
    {
      title: "Jojo",
      total: 21200,
    },
    {
      title: "Jojo",
      total: 21200,
    },
    {
      title: "Jojo",
      total: 21200,
    },
    {
      title: "Jojo",
      total: 21200,
    },
    {
      title: "Jojo",
      total: 21200,
    },
  ],
};

export default function Home() {
  const doughnutDiagramDatas = doughnutDiagramMapper(api);
  return (
    <section>
      <div className="flex justify-between items-center capitalize caption mb-6">
        <DynamicSelectFilter />
        <span className="cursor-pointer flex flex-row gap-2 items-center">
          <Download />
          download
        </span>
      </div>
      <div className="grid grid-cols-7 grid-rows-3 gap-4">
        {doughnutDiagramDatas.map((data) => {
          return (
            <Card1
              key={data.total}
              title="Users"
              total={data.total}
              className="col-span-2"
            >
              <DynamicDoughnutDiagram
                dataset={data.dataset}
                labels={data.labels}
              />
            </Card1>
          );
        })}
        <div className="grid grid-cols-3 grid-rows-2 col-span-3 gap-4">
          {api.card.map((data) => (
            <Card1 key={data.total} title="Users" total={data.total} />
          ))}
        </div>
        <Card2
          className="col-span-4"
          title="Overall User Acquisition"
          select={["admin", "customer", "user"]}
        >
          <DynamicStackedbarDiagram />
        </Card2>

        <Card2
          className="col-span-3"
          title="Overall User Activity"
          select={["admin", "customer", "user"]}
        >
          <DynamicLineDiagram />
        </Card2>

        <Card2 className="col-span-4" title="Top Revenue Generators ">
          <div className="flex flex-col gap-2">
            <List image="/assets/can.webp" name="Tesla" content="$1000" />
            <List image="/assets/rain.webp" name="Google" content="$1000" />
            <List image="/assets/can.webp" name="Microsoft" content="$1000" />
            <List image="/assets/rain.webp" name="Facebook" content="$1000" />
          </div>
        </Card2>

        <div className="col-span-3 grid grid-cols-2 gap-4">
          <Card2 className="" title="Admin Activity">
            <div className="flex flex-col gap-2">
              <List name="Tesla" content="$1000" />
              <List name="Google" content="$1000" />
              <List name="Microsoft" content="$1000" />
              <List name="Facebook" content="$1000" />
              <List name="AWS" content="$1000" />
              <List name="SpaceX" content="$1000" />
            </div>
          </Card2>

          <Card2 className="" title="User Activity">
            <div className="flex flex-col gap-2">
              <List name="Tesla" content="$1000" />
              <List name="Google" content="$1000" />
              <List name="Microsoft" content="$1000" />
              <List name="Facebook" content="$1000" />
              <List name="AWS" content="$1000" />
              <List name="SpaceX" content="$1000" />
            </div>
          </Card2>
        </div>
      </div>
    </section>
  );
}
