import TopbarReports from "@/components/navbar/TopbarReports";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Virdee Reports Menu",
  description:
    "E-commerce reports menu for analyzing revenue from selled products",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center gap-6">
        <h1 className="heading1 capitalize">Reports</h1>
        <TopbarReports />
      </div>

      <Separator orientation="horizontal" className="my-6" />

      {children}
    </>
  );
}
