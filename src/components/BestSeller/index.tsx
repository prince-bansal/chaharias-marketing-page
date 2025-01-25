import { CatalogData } from "@/lib/data";
import Image from "next/image";
import Heading from "../Heading";
import InnerWrapper from "../InnerWrapper";

const BestSellerCard = () => {
  return (
    <div className="">
      <Image
        className="rounded-md h-80 object-cover w-80"
        src={
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        width={300}
        height={300}
        alt="Placeholder"
      />
    </div>
  );
};

const BestSeller = () => {
  return (
    <InnerWrapper>
      <Heading>BestSeller</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {CatalogData.slice(0, 4).map((product) => (
          <BestSellerCard key={product.id} />
        ))}
      </div>
    </InnerWrapper>
  );
};

export default BestSeller;
