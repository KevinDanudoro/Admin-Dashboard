import React from "react";
import type { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  name: string;
  content: string;
}

const List: FC<ListProps> = ({ image, name, content, className, ...props }) => {
  return (
    <div
      className={cn(
        className,
        "grid grid-cols-[auto,1fr,auto] grid-flow-row items-center gap-x-2"
      )}
      {...props}
    >
      {image && (
        <Image
          src={image}
          alt={`${image} image`}
          width={128}
          height={100}
          className="w-16 h-10 object-cover rounded-lg"
        />
      )}
      <small className={`caption-thin ${!image && "col-span-2"}`}>{name}</small>
      <small className="heading2">{content}</small>
    </div>
  );
};

export default List;
