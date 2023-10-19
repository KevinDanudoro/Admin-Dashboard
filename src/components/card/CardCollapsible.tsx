"use client";

import React, { useState } from "react";
import type { FC } from "react";
import CardLayout from "./CardLayout";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

interface CardCollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  name: string;
  defaultCollaps?: boolean;
}

const CardCollapsible: FC<CardCollapsibleProps> = ({
  name,
  children,
  className,
  defaultCollaps = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(defaultCollaps);
  return (
    <CardLayout
      className={`duration-200 grid ${
        isOpen ? "grid-rows-[auto,auto,70vh]" : "grid-rows-[auto,0,0]"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="heading2 text-lg">{name}</h2>
        <Button
          type="button"
          variant="secondary"
          className="aspect-square w-11 h-11 rounded-full p-3"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <Minus /> : <Plus />}
        </Button>
      </div>

      <Separator
        orientation="horizontal"
        className={`${
          isOpen ? "opacity-100 my-4" : "opacity-0 my-0"
        } duration-150`}
      />

      <div
        className={cn(
          className,
          `duration-150 overflow-hidden ${
            isOpen ? "max-h-full opacity-100" : "opacity-0"
          }`
        )}
        {...props}
      >
        {children}
      </div>
    </CardLayout>
  );
};

export default CardCollapsible;
