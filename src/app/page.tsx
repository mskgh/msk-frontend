
import HeroSecComp from "./components/hero-section/HeroSecComp";
import StatComp from "./components/stat-section/StatComp";
import FeatureComp from "./components/feature-section/FeatureComp";
import ServiceComp from "./components/service-section/ServiceComp";
import TrackComp from "./components/track-section/TrackComp";
import PricingComp from "./components/pricing-section/PricingComp";
import TestimonialComp from "./components/testimonial-section/TestimonialComp";
import DownloadComp from "./components/download-section/DownloadComp";
import FAQComp from "./components/FAQ-section/FAQComp";
import FooterComp from "./components/footer-section/FooterComp";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSecComp />
      <StatComp />
      <FeatureComp />
      <ServiceComp />
      <TrackComp />
      <PricingComp />
      <TestimonialComp />
      <DownloadComp />
      <FAQComp />
      <FooterComp />
    </main>
  );
}
