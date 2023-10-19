import React from "react";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CardCollapsible from "@/components/card/CardCollapsible";
import { DataTable } from "@/components/table/Table";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="heading1 capitalize">workspaces</h1>
        <Button className="bg-primary text-primary-foreground">
          <Plus /> Add Workspace
        </Button>
      </div>
      <Separator orientation="horizontal" />
      <CardCollapsible name="Paid" defaultCollaps={true}>
        <DataTable />
      </CardCollapsible>
      <CardCollapsible name="Trial">
        <DataTable />
      </CardCollapsible>
      <CardCollapsible name="Free">
        <DataTable />
      </CardCollapsible>
    </section>
  );
};

export default page;
