import Image from "next/image";
import Heading from "../Heading";
import InnerWrapper from "../InnerWrapper";
import { Products } from "@/lib/data";
import { IProduct } from "@/lib/types/Product";
import { FC } from "react";

type CardProps = {
  product: IProduct;
};

const Card: FC<CardProps> = ({ product }) => {
  return (
    <div className="">
      <Image
        className="rounded-md h-96 m-auto"
        src={product.image}
        width={300}
        height={300}
        alt="Placeholder"
      />
      <div className="py-4">
        <p className="text-xl text-center">{product.title}</p>
        <p className="text-center text-xl font-semibold">
          {product.discountPrice}{" "}
          <span className="line-through text-gray-500 italic text-base">
            {product.price}
          </span>
        </p>
      </div>
    </div>
  );
};

const Catalogue = () => {
  return (
    <InnerWrapper>
      <Heading>Catalogue</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {Products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </InnerWrapper>
  );
};

export default Catalogue;
