"use client";

import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const topbarMenus = ["overview", "products", "sales", "marketting"];

interface TopbarReportsProps {}

const TopbarReports: FC<TopbarReportsProps> = ({}) => {
  const pathname = usePathname();
  const [position, setPosition] = useState(0);
  const translateValue = position * 128;

  useEffect(() => {
    const splitPath = pathname.split("/");
    const lastPath = splitPath[splitPath.length - 1];
    setPosition(topbarMenus.findIndex((menu) => menu === lastPath));
  }, [pathname]);

  return (
    <ul className="flex bg-slate-100 rounded-lg relative p-2 h-14">
      <span
        className={`w-32 h-10 bg-white absolute rounded-lg shadow-md duration-150`}
        style={{ transform: `translateX(${translateValue}px)` }}
      />
      {topbarMenus.map((menu, i) => (
        <Link
          key={menu}
          href={`./${menu}`}
          className="z-10"
          onClick={() => setPosition(i)}
        >
          <li
            className={`flex justify-center items-center w-32 py-2 capitalize cursor-pointer ${
              position == i ? "heading2 text-accent" : "caption-thin"
            }`}
          >
            {menu}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default TopbarReports;
