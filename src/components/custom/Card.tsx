import React from "react";
import type { FC } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
  count: number;
}

const Card: FC<CardProps> = (props) => {
  const { children, className, title, count, ...resProps } = props;
  return (
    <div
      className={cn("rounded-card p-4 shadow-md bg-card", className)}
      {...resProps}
    >
      <h3 className="caption">{title}</h3>
      <p className="heading1">{count.toLocaleString("en-US")}</p>
      {children}
    </div>
  );
};

export default Card;
