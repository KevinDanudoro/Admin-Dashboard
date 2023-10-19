import React from "react";
import type { FC } from "react";
import { Loader } from "lucide-react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className="absolute inset-0 h-[calc(100svh-200px)] flex justify-center items-center">
      <Loader className="w-12 h-12 animate-spin" />
    </div>
  );
};

export default loading;
