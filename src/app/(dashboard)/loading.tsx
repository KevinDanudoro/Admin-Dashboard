import React from "react";
import type { FC } from "react";
import { Loader } from "lucide-react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className="absolute inset-0 h-[100svh] flex justify-center items-center">
      <Loader className="w-12 h-12 animate-spin" />
    </div>
  );
};

export default loading;
