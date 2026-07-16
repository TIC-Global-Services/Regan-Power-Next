import FeatureSplitSection from '@/reuseables/FeatureSplitSection';
import whyMattersBg from '@/assets/solar/deals/whythatmatters.png';

const checklistItems = [
  {
    title: "In-House Installation",
    description: "Our Electricians Are Employed By Regen Power. They're Not A Labour-Hire Crew Dispatched By A Sales Agency. Same Team, Same Standard, Every Install.",
    image: whyMattersBg
  },
  {
    title: "Tier-1 Components Only",
    description: "Every Panel And Inverter We Quote Is On The Clean Energy Council Approved Products List. No Budget Substitutes, No \"Equivalent\" Downgrades At Installation Day.",
    image: whyMattersBg
  },
  {
    title: "Full Rebate + Paperwork Handling",
    description: "STCs, WA Residential Battery Scheme, Plenti Loan, Synergy/Horizon Connection, DEBS Feed-In — All Submitted By Our Perth Office. You Don't See A Form.",
    image: whyMattersBg
  },
  {
    title: "23 Years Of Perth Service",
    description: "When You Call Us In 2035 About A Synergy Tariff Change Or A Battery Expansion, The Business Answering The Phone Is The Same One That Installed Your System. Six Consecutive ProductReview Awards Say We're Good At This.",
    image: whyMattersBg
  }
];

export default function WhyThatMattersSection() {
  return (
    <FeatureSplitSection
      subtitle="Why Our Deals Aren't The Cheapest In Perth"
      heading="And Why That Matters."
      introText="When You Call Us In 2035 About A Synergy Tariff Change Or A Battery Expansion, The Business Answering The Phone Is The Same One That Installed Your System."
      features={checklistItems}
    />
  );
}
