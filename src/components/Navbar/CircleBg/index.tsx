import { FC, PropsWithChildren } from "react";

const CircleBG: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex cursor-pointer hover:bg-white rounded-full bg-gray-200 w-10 h-10 items-center justify-center">
      {children}
    </div>
  );
};

export default CircleBG;
