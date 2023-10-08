import React from "react";
import type { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SelectFilterGhostProps {}

const SelectFilterGhost: FC<SelectFilterGhostProps> = ({}) => {
  return (
    <Select defaultValue="Admin">
      <SelectTrigger
        className="justify-self-end bg-transparent border-0 justify-end gap-3 w-fit"
        aria-label="overall user acquisition filter"
      >
        <SelectValue defaultValue="Admin" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Admin">Admin</SelectItem>
        <SelectItem value="User">User</SelectItem>
        <SelectItem value="Customer">Customer</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectFilterGhost;
