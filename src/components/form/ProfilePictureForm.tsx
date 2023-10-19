"use client";

import React, { useState } from "react";
import type { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";

interface ProfilePictureFormProps {}

const ProfilePictureForm: FC<ProfilePictureFormProps> = ({}) => {
  const [isInputShow, setIsInputShow] = useState(false);
  const [imageSrc, setImageSrc] = useState("/assets/can.webp");

  const setNewProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file === null) {
      toast({
        title: "Failed Change The Profile Picture",
        description: <p>File format was invalid</p>,
      });
      return;
    }

    const fReader = new FileReader();
    fReader.readAsDataURL(file);
    fReader.onloadend = (e) => {
      setImageSrc(e.target?.result as string);
      toast({
        title: "Success Change The Profile Picture",
        description: <p>Set new profile picture</p>,
      });
    };
  };

  return (
    <div
      className={`duration-200 overflow-hidden ${
        isInputShow ? "h-36" : "h-20"
      }`}
    >
      <div className="grid grid-cols-[auto,1fr,auto] gap-x-2 items-center">
        <Image
          src={imageSrc}
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full aspect-square object-cover w-20"
        />
        <div>
          <p className="heading2">Kevin</p>
          <small className="caption-thin">Kevin Danudoro</small>
        </div>

        <Button
          type="button"
          variant="ghost"
          onClick={() => setIsInputShow((prev) => !prev)}
        >
          Edit
        </Button>
      </div>
      <Input
        type="file"
        className={`w-full mt-2 duration-200 ${
          isInputShow ? "translate-y-2" : "opacity-0 translate-y-0"
        }`}
        onChange={setNewProfilePicture}
      />
    </div>
  );
};

export default ProfilePictureForm;
