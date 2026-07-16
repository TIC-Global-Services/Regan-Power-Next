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
import TextReveal from "@/reuseables/TextReveal";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AwardAndRecognations />
      <WhyChooseUs />
      <Expertise />
      <FeatureExplorer />
      
      {/* Visual Verification of the first style (without badge) */}
      <TextReveal
        showBadge={true}
        badgeText="hello"
        preTitle="A Solar System Is Two Things"
        mainTitle="Working Together."
        text={"The solar industry carries hundreds of panel brands and dozens of inverter manufacturers. Most installers will fit whatever their wholesaler has on special that week. That approach keeps the quote low, but it pushes the risk onto your roof. Our approach is the opposite. We've deliberately narrowed our range to six Tier-1 panel brands and four premium hybrid inverter brands. Every brand on this page has been installed by us at scale, monitored for real-world performance in Perth conditions, and supported through warranty cycles we've actually seen play out."}
      />

      <Partners />
      <ZeroInterestFinancing />
      <FeatureSplitSection />

      {/* Visual Verification of the second style (with badge) */}
      <TextReveal
        showBadge={true}
        badgeText="PHILOSOPHY"
        preTitle="We Install Fewer Brands,"
        mainTitle="Deliberately."
        text="The Solar Industry Carries Hundreds Of Panel Brands And Dozens Of Inverter Manufacturers. Most Installers Will Fit Whatever Their Wholesaler Has On Special That Week. That Approach Keeps The Quote Low, But It Pushes The Risk Onto Your Roof. Our Approach Is The Opposite. We've Deliberately Narrowed Our Range To Six Tier-1 Panel Brands And Four Premium Hybrid Inverter Brands. Every Brand On This Page Has Been Installed By Us At Scale, Monitored For Real-World Performance In Perth Conditions, And Supported Through Warranty Cycles We've Actually Seen Play Out."
      />
      
      {/* <GetSolar/>
      <FAQ/> */}
      <Craftsmanship />
      <RealStories />
      <FeatureCardGrid/>
       <BatteryQuote />
    </div>
  );
}

