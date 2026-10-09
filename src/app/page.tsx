import AllProductsSection from "@/components/home/AllProductsSection";
import FallersSection from "@/components/home/FallersSection";
import HeroBanner from "@/components/home/HeroBanner";
import RisersSection from "@/components/home/RisersSection";

export default function Home() {
  return (
    <div className="space-y-2 pb-12">
      <HeroBanner />
      <RisersSection />
      <FallersSection />
      <AllProductsSection />
    </div>
  );
}