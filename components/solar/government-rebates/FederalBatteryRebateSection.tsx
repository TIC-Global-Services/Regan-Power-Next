import FullscreenSplitSection from "@/reuseables/FullscreenSplitSection";
import newHomeBatteryImg from "@/assets/solar/government-rebates/newhomebattery.png";

export default function FederalBatteryRebateSection() {
  return (
    <FullscreenSplitSection
      subtitle="Around 30% Off"
      title="A New Home Battery"
      description="The Cheaper Home Batteries Program supports battery storage through 2030, but the promoted value stepped down over time. Quotes issued after Thursday, May 1, 2026 should reflect the lower post-step-down rebate position."
      image={newHomeBatteryImg}
      imageAlt="Two home battery units mounted on an exterior wall"
      imagePosition="left"
      textArrangement="center"
      badge="Federal Battery Rebate"
    />
  );
}
