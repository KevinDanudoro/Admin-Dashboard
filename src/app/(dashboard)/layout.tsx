import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme/ThemeProvider";

import { cn } from "@/lib/utils";
import Sidebar from "@/components/navbar/Sidebar";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

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
            <div className="ml-60 p-12 relative">{children}</div>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
