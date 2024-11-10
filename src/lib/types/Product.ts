import { StaticImageData } from "next/image";

export type IProduct = {
  id: number;
  imagePath: StaticImageData;
  title: string;
  description: string;
};
