import Image from "next/image";
import HeroSection from "../components/home/Hero";
import AwardAndRecognations from "@/components/home/awardandrecognations";
import WhyChooseUs from "@/components/home/whychooseus";
import Expertise from "@/components/home/expertise";
import Partners from "@/components/home/partners";
import ZeroInterestFinancing from "@/components/home/zerointrestfinancing";
import FeatureSplitSection from "@/reuseables/FeatureSplitSection";
import FeatureExplorer from "@/reuseables/FeatureExplorer";
import GetSolar from "@/reuseables/getsolar";
import FAQ from "@/reuseables/faq";
import FeatureCardGrid from "@/reuseables/FeatureCardGrid";
import Craftsmanship from "@/components/home/craftmanship";
import RealStories from "@/components/home/realStories";
import BatteryQuote from "@/components/home/batteryQuote";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AwardAndRecognations />
      <WhyChooseUs />
      <Expertise />
      <FeatureExplorer />
      <Partners />
      <ZeroInterestFinancing />
      {/* <FeatureSplitSection /> */}
      
      {/* <GetSolar/>
      <FAQ/> */}
      <Craftsmanship />
      <RealStories />
      <FeatureCardGrid/>
       <BatteryQuote />
    </div>
  );
}
