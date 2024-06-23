import { SectionHeadingProps } from "@/lib/interface";
import React from "react";

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2
      className="text-3xl font-medium capitalize mb-8 text-center
    dark:text-white"
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
