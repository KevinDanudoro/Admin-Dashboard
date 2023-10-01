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
          <div className="relative">
            <Sidebar />
            <div className="ml-60 px-12 pt-12">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
