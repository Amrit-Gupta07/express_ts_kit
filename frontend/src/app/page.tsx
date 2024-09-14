import FeatureSection from "@/components/ui/base/FeatureSection";
import Footer from "@/components/ui/base/Footer";
import HeroSection from "@/components/ui/base/HeroSection";
import UserReviews from "@/components/ui/base/UserReviews";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
