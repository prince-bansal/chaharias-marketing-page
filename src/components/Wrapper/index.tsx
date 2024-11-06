import { cn } from "@/lib/cn";
import React, { FC, PropsWithChildren } from "react";

type WrapperProps = PropsWithChildren<{
  classNames?: string;
  id?: string;
}>;

const Wrapper: FC<WrapperProps> = ({ children, classNames, id }) => {
  return (
    <div id={id} className={cn("my-10 lg:my-20 flex items-center", classNames)}>
      <div className="w-full h-full text-black">{children}</div>
    </div>
  );
};

export default Wrapper;
