import Brands from "@/components/Brands";
import Catalogue from "@/components/Catalogue";
import Map from "@/components/Map";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Slider />
      <Catalogue />
      <Testimonials />
      <Brands />
      <Map />
    </div>
  );
}
