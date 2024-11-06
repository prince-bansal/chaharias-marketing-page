import { cn } from "@/lib/cn";
import React, { FC, PropsWithChildren } from "react";

type HeadingProps = PropsWithChildren & {
  isCenter?: boolean;
};

const Heading: FC<HeadingProps> = ({ children, isCenter }) => {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold my-8",
        `lg:text-5xl lg:font-bold lg:my-10`,
        isCenter && "text-center w-full"
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
