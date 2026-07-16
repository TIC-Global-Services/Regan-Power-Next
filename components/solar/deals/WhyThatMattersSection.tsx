import FullscreenSplitSection from "@/reuseables/FullscreenSplitSection";
import WhyMattersChecklist from "@/components/solar/deals/WhyMattersChecklist";
import whyMattersBg from "@/assets/solar/deals/whythatmatters.png";

export default function WhyThatMattersSection() {
  return (
    <FullscreenSplitSection
      subtitle="Why Our Deals Aren't The Cheapest In Perth"
      title="And Why That Matters."
      description={<WhyMattersChecklist />}
      image={whyMattersBg}
      imageAlt="Why Our Deals Matter"
      imagePosition="right"
      textArrangement="split"
    />
  );
}
