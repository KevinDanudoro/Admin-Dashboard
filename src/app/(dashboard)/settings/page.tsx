import React from "react";
import type { FC } from "react";

import PersonalForm from "@/components/form/PersonalForm";
import Card2 from "@/components/card/Card2";
import { Separator } from "@/components/ui/separator";
import ProfilePictureForm from "@/components/form/ProfilePictureForm";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="heading1 capitalize">settings</h1>
      </div>

      <Separator orientation="horizontal" />

      <div className="flex flex-row gap-4">
        <Card2
          title="Personal Information"
          titleStyle="font-bold"
          className="w-[65%] h-fit"
        >
          <PersonalForm />
        </Card2>
        <Card2
          title="Your Profile Picture"
          titleStyle="font-bold"
          className="w-[35%] h-fit"
        >
          <ProfilePictureForm />
        </Card2>
      </div>
    </section>
  );
};

export default page;
