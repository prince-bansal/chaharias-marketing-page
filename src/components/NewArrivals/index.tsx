import { CatalogData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import Heading from "../Heading";
import InnerWrapper from "../InnerWrapper";

const NewArrivalCard = ({ imageUrl }: { imageUrl: StaticImageData }) => {
  return (
    <div className="w-[90%] sm:w-[45%] lg:w-[23%] m-3">
      <Image
        className="rounded-md object-cover m-auto"
        src={imageUrl}
        width={300}
        height={300}
        alt="Placeholder"
        placeholder="blur"
      />
    </div>
  );
};

const NewArrival = () => {
  return (
    <InnerWrapper>
      <Heading>New Arrivals</Heading>

      <div className="flex flex-wrap w-full justify-between">
        {CatalogData.map((product) => (
          <NewArrivalCard key={product.id} imageUrl={product.imagePath} />
        ))}
      </div>
    </InnerWrapper>
  );
};

export default NewArrival;
