import React from "react";
import type { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";

interface SelectFilterProps extends SelectProps {
  title: string;
  choices: string[];
}

const SelectFilter: FC<SelectFilterProps> = (props) => {
  const { title, choices, ...resProps } = props;
  return (
    <Select defaultValue={choices[0]} {...resProps}>
      <SelectTrigger
        className="w-[250px] capitalize bg-card rounded-full"
        aria-label="dashboard content filter"
      >
        <div className="flex gap-2">
          <span>{title}: </span>
          <div className="heading2">
            <SelectValue defaultValue={choices[0]} />
          </div>
        </div>
      </SelectTrigger>
      <SelectContent className="capitalize">
        {choices.map((choice) => (
          <SelectItem key={choice} value={choice}>
            {choice}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectFilter;
