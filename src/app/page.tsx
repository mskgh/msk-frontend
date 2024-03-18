
import HeroSecComp from "./components/hero-section/HeroSecComp";
import StatComp from "./components/stat-section/StatComp";
import FeatureComp from "./components/feature-section/FeatureComp";
import ServiceComp from "./components/service-section/ServiceComp";
import TrackComp from "./components/track-section/TrackComp";
import PricingComp from "./components/pricing-section/PricingComp";
import TestimonialComp from "./components/testimonial-section/TestimonialComp";
import DownloadComp from "./components/download-section/DownloadComp";
import FAQComp from "./components/FAQ-section/FAQComp";
import Layout from "./components/layout/Layout";
import MobileHeroComp from "./components/hero-section/MobileHeroComp";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col">
        <div className="hidden md:block">
           <HeroSecComp />
        </div>
     <div className="md:hidden block">
      <MobileHeroComp/>
     </div>
      <StatComp />
      <FeatureComp />
      <ServiceComp />
      <TrackComp />
      <PricingComp />
      <TestimonialComp />
      <DownloadComp />
      <FAQComp />
    </main>
    </Layout>
    
  );
}
