import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/implement/ThemeProvider";

import { cn } from "@/lib/utils";
import Sidebar from "@/components/implement/Sidebar";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virdee Dashboard",
  description:
    "E-commerce dashboard for analyzing revenue from selled products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-row h-[100vh]">
            <Sidebar />
            <div className="px-20 py-12 w-full">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
