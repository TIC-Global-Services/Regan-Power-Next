import type { Metadata } from "next";

import EligibilityChecker from "@/components/solar/government-rebates/EligibilityChecker";
import FederalBatteryRebateSection from "@/components/solar/government-rebates/FederalBatteryRebateSection";
import FinalGetSolarSection from "@/components/solar/FinalGetSolarSection";
import LoanBenefitsOverlay from "@/components/solar/government-rebates/LoanBenefitsOverlay";
import PaperworkSection from "@/components/solar/government-rebates/PaperworkSection";
import RebateProgramSelector from "@/components/solar/government-rebates/RebateProgramSelector";
import STCExplainer from "@/components/solar/government-rebates/STCExplainer";
import UtilityRebateCards from "@/components/solar/government-rebates/UtilityRebateCards";
import FAQ from "@/reuseables/faq";
import Hero from "@/reuseables/Hero";
import heroImg from "@/assets/solar/government-rebates/hero.png";
import hybridImg from "@/assets/solar/government-rebates/hybrid.png";
import faqBg from '@/assets/solar/faq.png';

const rebateFaqItems = [
  {
    question: "Q1. Can I stack the federal and WA battery rebates?",
    answer:
      "Yes. Eligible households can combine the federal battery rebate with the WA Residential Battery Scheme, provided the installation, retailer, VPP, and product requirements are all satisfied.",
  },
  {
    question: "Q2. Do I need to lodge the rebate applications myself?",
    answer:
      "Usually no. The installer handles the STC processing, product documentation, retailer paperwork, and the WA scheme application flow. You mainly provide identity, address, and site details when requested.",
  },
  {
    question: "Q3. What changed on Thursday, May 1, 2026?",
    answer:
      "That date was used in marketing because the federal battery rebate value was advertised as stepping down after Thursday, May 1, 2026. If you are reading this after that date, current quotes should reflect the lower post-step-down value.",
  },
  {
    question: "Q4. Is the WA battery rebate the same for Synergy and Horizon Power?",
    answer:
      "No. The per-kWh support differs: Synergy customers were advertised at up to $130 per kWh, while Horizon Power customers were advertised at up to $380 per kWh, each capped at 10 kWh.",
  },
  {
    question: "Q5. Do I have to join a virtual power plant?",
    answer:
      "For the WA scheme as presented here, yes. Participation in an eligible VPP is part of the state rebate conditions for most households.",
  },
  {
    question: "Q6. Is the no-interest loan available without the rebates?",
    answer:
      "The loan is designed to cover the out-of-pocket balance after rebates. Eligibility still depends on income, credit assessment, approved equipment, and the retailer pathway tied to the battery scheme.",
  },
];

export const metadata: Metadata = {
  title: "Government Rebates | Regen Power",
  description:
    "Understand the federal STC rebate, WA battery support, and no-interest battery loan options available to Perth households in 2026.",
};

export default function GovernmentRebatesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero
        mediaSrc={heroImg}
        mediaType="image"
        topSubtitle="Solar & Battery Rebates"
        mainTitle="In WA, 2026"
        description="Three rebates, one no-interest loan, and the key 2026 program rules Perth homeowners still need to understand when pricing solar, batteries, and the balance after incentives."
        ctaText="Get Your Free Quote"
        ctaLink="#quote-form"
        subtitleColor="text-white"
        titleColor="text-[#63B846]"
        descriptionColor="text-white/95"
        showOverlay
      />

      <RebateProgramSelector />
      <STCExplainer />

      <FederalBatteryRebateSection />

      <UtilityRebateCards />

      <LoanBenefitsOverlay />

      <EligibilityChecker />

      <PaperworkSection />

      <FAQ
        topTitle="FAQ"
        title="Six Rebate Questions With Schema"
        listTitle="Frequently Asked Questions"
        image={faqBg}
        items={rebateFaqItems}
        enableSchema
        defaultOpenIndex={1}
      />

      <FinalGetSolarSection />
    </div>
  );
}
