"use client";

import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const topbarMenus = ["overview", "products", "sales", "marketting"];

interface TopbarProps {}

const Topbar: FC<TopbarProps> = ({}) => {
  const pathname = usePathname().split("/");
  const lastPath = pathname[pathname.length - 1];
  const positionPath = topbarMenus.findIndex((menu) => menu === lastPath);

  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(positionPath);
  }, [positionPath]);

  return (
    <ul className="flex bg-slate-100 rounded-lg relative p-2 h-14">
      <span
        className={`w-32 h-10 bg-white absolute rounded-lg shadow-md duration-150 translate-x-[${
          position * 128 //! Kalo dibalik perkaliannya error (KERENNN :V)
        }px]`}
      />
      {topbarMenus.map((menu, i) => (
        <Link
          key={menu}
          href={`./${menu}`}
          className="z-10"
          onClick={() => setPosition(i)}
        >
          <li className="caption flex justify-center items-center w-32 py-2 capitalize cursor-pointer">
            {menu}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Topbar;
