"use client";

import React, { useEffect, useState } from "react";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { LayoutGrid, Settings, TrendingUp } from "lucide-react";
import { usePathname } from "next/navigation";

interface ISidebarContent {
  title: string;
  icon: LucideIcon;
  nav: string;
}

export const sidebarContents: ISidebarContent[] = [
  {
    title: "reports",
    icon: TrendingUp,
    nav: "reports",
  },
  {
    title: "workspaces",
    icon: LayoutGrid,
    nav: "workspaces",
  },
  {
    title: "settings",
    icon: Settings,
    nav: "settings",
  },
];

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const [menu, setMenu] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const midPath = pathname.split("/")[1];
    const currentMenu = sidebarContents.findIndex(
      (content) => content.nav === midPath
    );

    setMenu(currentMenu);
  }, [pathname]);

  return (
    <div className="w-60 h-full bg-white box-border px-4 py-9 rounded-r-card shadow-xl fixed top-0 bottom-0 left-0">
      <Image
        src="/logo/virdee.svg"
        alt="virdee dashboard logo"
        className="w-28 ml-4"
        width={20}
        height={10}
        priority
      />
      <nav>
        <ul className="flex flex-col gap-4 mt-10">
          {sidebarContents.map((content, i) => {
            const LucideIcons = content.icon;
            return (
              <li key={content.title}>
                <Link
                  href={`/${content.nav}`}
                  className={`capitalize px-4 py-3 rounded-lg flex gap-4 hover:bg-accent-foreground duration-150 ${
                    menu === i
                      ? "text-accent bg-accent-foreground heading2"
                      : "caption"
                  }`}
                  onClick={() => setMenu(i)}
                >
                  <LucideIcons />
                  {content.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
