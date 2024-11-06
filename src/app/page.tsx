import Brands from "@/components/Brands";
import Catalogue from "@/components/Catalogue";
import Map from "@/components/Map";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Slider />
      <Catalogue />
      <Testimonials />
      <Brands />
      <Map />
      <Footer />
    </div>
  );
}
