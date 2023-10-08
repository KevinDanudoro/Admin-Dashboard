import React from "react";
import type { FC } from "react";
import CardLayout from "./CardLayout";
import SelectFilterGhost from "../filter/SelectFilterGhost";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

interface Card2Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  select?: string[];
  children: React.ReactNode;
}

const Card2: FC<Card2Props> = (props) => {
  const { children, className, title, select, ...resProps } = props;

  return (
    <CardLayout
      className={cn(
        className,
        "grid grid-rows-[auto,auto,1fr] grid-cols-2 place-items-center gap-y-2 caption-thin"
      )}
      {...resProps}
    >
      <h4 className="justify-self-start w-max">{title}</h4>
      {select && <SelectFilterGhost />}
      <Separator orientation="horizontal" className="col-span-2" />
      <div className="col-span-2 h-full w-full">{children}</div>
    </CardLayout>
  );
};

export default Card2;
