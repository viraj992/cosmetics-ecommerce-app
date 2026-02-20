import FeaturedBrands from "../components/Home/FeaturedBrands";
import Footer from "../components/Home/Footer";
import HeroSection from "../components/Home/HeroSection";
import HowItWorks from "../components/Home/HowItWoks";
import OurProducts from "../components/Home/OurProducts";
import PromoBanner from "../components/Home/PromoBanner";

export default function HomePage() {
  return (
    <div className="w-full h-screen">
      <HeroSection />
      <HowItWorks />
      <FeaturedBrands />
      <OurProducts />
      <PromoBanner />
      <Footer />
    </div>
  );
}
