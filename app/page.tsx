import Image from "next/image";
import HeroSection from "../components/home/Hero";
import AwardAndRecognations from "@/components/home/awardandrecognations";
import WhyChooseUs from "@/components/home/whychooseus";
import Expertise from "@/components/home/expertise";
import Partners from "@/components/home/partners";
import ZeroInterestFinancing from "@/components/home/zerointrestfinancing";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AwardAndRecognations />
      <WhyChooseUs />
      <Expertise />
      <Partners />
      <ZeroInterestFinancing />
    </div>
  );
}
