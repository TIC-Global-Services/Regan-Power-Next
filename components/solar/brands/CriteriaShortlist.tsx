import FeatureSplitSection from '@/reuseables/FeatureSplitSection';
import coinsImg from '@/assets/solar/brands-tech/howitgoaway.png';

const criteriaItems = [
  {
    title: "Bankability",
    description: "Bloomberg NEF Tier-1 Classification Or Equivalent. We Want Manufacturers Still In Business When Your Warranty Is Claimed In 2050.",
    image: coinsImg
  },
  {
    title: "Local Service Infrastructure",
    description: "Australian-Based Technical Support, Spare Parts Held On-Shore, And Warranty Claim Turnaround Measured In Days, Not Months.",
    image: coinsImg
  },
  {
    title: "CEC Approval",
    description: "Listed On The Current Clean Energy Council Approved Products List. Non-Negotiable For STC Rebate Eligibility.",
    image: coinsImg
  },
  {
    title: "Real-World Performance",
    description: "Sustained Output Monitored Across Our 45,000+ Installations. Brands We've Seen Underperform In Perth Heat Or Coastal Conditions Don't Make This Page.",
    image: coinsImg
  }
];

export default function CriteriaShortlist() {
  return (
    <FeatureSplitSection
      subtitle="Our Ten-Brand Shortlist,"
      heading="And How It Got Away."
      introText="Every Brand On This Page Has To Meet Five Criteria Before We Put It On A Perth Roof. We'd Rather Turn Down A Volume Deal Than Install Something We Wouldn't Want Supporting For The Next 25 Years."
      features={criteriaItems}
    />
  );
}
