import { FC, PropsWithChildren } from "react";
import Wrapper from "../Wrapper";

type InnerWrapperProps = PropsWithChildren<{
  classNames?: string;
}>;

const InnerWrapper: FC<InnerWrapperProps> = ({ children }) => {
  return (
    <Wrapper>
      <div className="h-full text-black w-[80%] m-auto">{children}</div>
    </Wrapper>
  );
};

export default InnerWrapper;
