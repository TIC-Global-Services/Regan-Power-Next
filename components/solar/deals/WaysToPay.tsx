import FeatureCardGrid, { type FeatureCardItem } from '@/reuseables/FeatureCardGrid';

import stcImg from '@/assets/solar/deals/stcupfront.png';
import plentiImg from '@/assets/solar/deals/plenti.png';
import thirdPartyImg from '@/assets/solar/deals/thirdparty.png';

const cards: FeatureCardItem[] = [
  {
    title: "STC Upfront Discount",
    description: "Federal STC And WA Rebate Values Are Deducted Directly From Your Quoted Price. You Pay The Post-Rebate Balance.",
    image: stcImg,
    textPosition: "top",
    footerTitle: "Best For",
    footerDescription: "Any installation — applied by default."
  },
  {
    title: "Plenti\nNo-Interest Loan",
    description: "WA-Funded No-Interest Loan From $2,001 To $10,000. Flexible 3–10 Year Terms, No Early Repayment Fees.",
    image: plentiImg,
    textPosition: "top",
    footerTitle: "Best For",
    footerDescription: "Spreading the system cost with zero interest."
  },
  {
    title: "Third-Party Finance",
    description: "We Can Refer You To Accredited Green-Loan Providers For Larger Systems Or Commercial Installations.",
    image: thirdPartyImg,
    textPosition: "top",
    footerTitle: "Best For",
    footerDescription: "Commercial or off-grid solar portfolios."
  }
];

const WaysToPay = () => {
  return (
    <FeatureCardGrid
      topSubtitle="Three Ways To Pay"
      title="Including One With Zero Interest"
      bottomSubtitle="The Upfront Cost Of A Premium Solar Or Battery System Doesn't Need To Come Out Of Your Savings On Day One. Here's How Regen Power Customers Typically Structure Payment."
      cards={cards}
      showReadMore={false}
    />
  );
};

export default WaysToPay;
