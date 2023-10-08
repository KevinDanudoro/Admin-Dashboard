import React from "react";
import type { FC } from "react";
import CardLayout from "./CardLayout";

interface Card1Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
  total: number;
}

const Card1: FC<Card1Props> = (props) => {
  const { children, className, title, total, ...resProps } = props;
  return (
    <CardLayout className={className}>
      <h4 className="caption">{title}</h4>
      <p className="heading1">{total.toLocaleString("en-US")}</p>
      {children}
    </CardLayout>
  );
};

export default Card1;
