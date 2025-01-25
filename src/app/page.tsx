import Brands from "@/components/Brands";
import Catalogue from "@/components/Catalogue";
import Map from "@/components/Map";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";
import NewArrival from "@/components/NewArrivals";
import BestSeller from "@/components/BestSeller";

export default function Home() {
  return (
    <div className="relative">
      <Slider />
      <Catalogue />
      <BestSeller />
      <NewArrival />
      <Testimonials />
      <Brands />
      <Map />
    </div>
  );
}
