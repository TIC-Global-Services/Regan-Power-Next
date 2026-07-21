import FullscreenSplitSection from "@/reuseables/FullscreenSplitSection";
import dealOfBg from "@/assets/solar/deals/dealof.png";

export default function DealOf2026Section() {
  return (
    <FullscreenSplitSection
      subtitle="Why Solar Plus Battery"
      title="Is The Deal Of 2026."
      description="A Solar-Only System Saves You Money During The Day. A Solar-Plus-Battery System Saves You Money Around The Clock — And Right Now, In 2026, The Rebate Stack On A Battery Is The Strongest It Has Ever Been In Western Australia, Or Likely Will Be Again. Three Rebates, A No-Interest Loan, And Premium Components From A Single Installer. That's The Bundle We'd Recommend To Most Perth Households Installing In 2026."
      image={dealOfBg}
      imageAlt="Solar Plus Battery Setup"
      imagePosition="left"
      textArrangement="split"
    />
  );
}
