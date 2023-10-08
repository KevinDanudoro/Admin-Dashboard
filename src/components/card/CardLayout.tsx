import React from "react";
import type { FC } from "react";
import { cn } from "@/lib/utils";

interface CardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardLayout: FC<CardLayoutProps> = (props) => {
  const { children, className, ...resProps } = props;
  return (
    <div
      className={cn("rounded-card p-4 shadow-md bg-card", className)}
      {...resProps}
    >
      {children}
    </div>
  );
};

export default CardLayout;
