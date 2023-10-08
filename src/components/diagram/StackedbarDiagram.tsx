"use client";

import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { cn } from "@/lib/utils";

interface StackedbarDiagramProps extends React.HTMLAttributes<HTMLDivElement> {}

const StackedbarDiagram: FC<StackedbarDiagramProps> = ({
  className,
  ...props
}) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div
      className={cn(className, "grid grid-cols-[50px,1fr] w-full h-full")}
      {...props}
    >
      <div className="grid grid-rows-[1fr,7px] gap-y-2 mb-2">
        <div className="flex justify-between flex-col w-full row-start-1">
          <small>100k</small>
          <small>100k</small>
          <small>100k</small>
          <small>100k</small>
          <small>100k</small>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-[repeat(12,minmax(0,1fr))] lg:gap-x-4 gap-x-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id) => (
          <div
            key={id}
            className="grid grid-rows-[1fr,auto] justify-items-center gap-y-1"
          >
            <div className="w-full max-w-[13px] h-full rounded-full flex flex-col-reverse bg-accent-foreground overflow-hidden">
              <span
                className="h-full w-full rounded-full duration-200 ease-out bg-[linear-gradient(180deg,#769BFA,#1B59F8)]"
                style={{
                  transform: `${
                    state ? `translateY(${id * 7}%)` : "translateY(100%)"
                  }`,
                  transitionDelay: `${id * 50}ms`,
                }}
              />
            </div>
            <small className="row-start-2 uppercase">jan</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedbarDiagram;
