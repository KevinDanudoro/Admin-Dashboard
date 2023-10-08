"use client";

import React from "react";
import type { FC } from "react";
import { useSelectFilterOverview } from "@/store/SelectFilterOverview";
import SelectFilter from "@/components/filter/SelectFilter";

const filterContents = [
  {
    title: "timeframe",
    choices: ["all time", "7 days early", "1 months early"],
  },
  {
    title: "client",
    choices: ["all", "tesla", "disney"],
  },
  {
    title: "workspace",
    choices: ["all", "google", "microsoft"],
  },
];

interface SelectFilterOverviewProps {}

const SelectFilterOverview: FC<SelectFilterOverviewProps> = ({}) => {
  const { setFilters } = useSelectFilterOverview();

  return (
    <div className="flex gap-4">
      {filterContents.map((content) => (
        <SelectFilter
          key={content.title}
          title={content.title}
          choices={content.choices}
          onValueChange={(value: string) =>
            setFilters({ type: content.title, value })
          }
        />
      ))}
    </div>
  );
};

export default SelectFilterOverview;
