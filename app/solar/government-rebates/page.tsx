import React from "react";
import type { Metadata } from "next";
import { getRebatesPage } from "@/lib/strapi";
import type {
  RebatesHeroData,
  RebatesRebateProgramsData,
  RebatesStcExplainerData,
  RebatesSplitSectionData,
  RebatesUtilityCardsData,
  RebatesLoanBenefitsData,
  RebatesEligibilityCheckerData,
  RebatesFaqData,
  RebatesCtaBannerData,
} from "@/lib/strapi-schemas/rebates";

import RebatesHeroSection from "@/components/solar/government-rebates/RebatesHeroSection";
import RebateProgramsSection from "@/components/solar/government-rebates/RebateProgramsSection";
import StcExplainerSection from "@/components/solar/government-rebates/StcExplainerSection";
import SplitSectionSection from "@/components/solar/deals/SplitSectionSection";
import UtilityCardsSection from "@/components/solar/government-rebates/UtilityCardsSection";
import LoanBenefitsSection from "@/components/solar/government-rebates/LoanBenefitsSection";
import EligibilityCheckerSection from "@/components/solar/government-rebates/EligibilityCheckerSection";
import FaqSection from "@/components/solar/deals/FaqSection";
import CtaBannerSection from "@/components/solar/deals/CtaBannerSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Government Rebates | Regen Power",
  description:
    "Understand the federal STC rebate, WA battery support, and no-interest battery loan options available to Perth households in 2026.",
};

export default async function GovernmentRebatesPage() {
  const { data } = await getRebatesPage();
  const sections = data.sections ?? [];

  const hero = sections.find(
    (s) => s.__component === "rebates.hero"
  ) as RebatesHeroData | undefined;

  const rebatePrograms = sections.find(
    (s) => s.__component === "rebates.rebate-programs"
  ) as RebatesRebateProgramsData | undefined;

  const stcExplainer = sections.find(
    (s) => s.__component === "rebates.stc-explainer"
  ) as RebatesStcExplainerData | undefined;

  const splitSections = sections.filter(
    (s) => s.__component === "shared.split-section"
  ) as unknown as RebatesSplitSectionData[];
  const federalBatteryRebate = splitSections[0];
  const paperworkSection = splitSections[1];

  const utilityCards = sections.find(
    (s) => s.__component === "rebates.utility-cards"
  ) as RebatesUtilityCardsData | undefined;

  const loanBenefits = sections.find(
    (s) => s.__component === "rebates.loan-benefits"
  ) as RebatesLoanBenefitsData | undefined;

  const eligibilityChecker = sections.find(
    (s) => s.__component === "rebates.eligibility-checker"
  ) as RebatesEligibilityCheckerData | undefined;

  const faq = sections.find(
    (s) => s.__component === "shared.faq"
  ) as RebatesFaqData | undefined;

  const ctaBanner = sections.find(
    (s) => s.__component === "shared.cta-banner"
  ) as RebatesCtaBannerData | undefined;

  return (
    <div className="min-h-screen bg-white text-black">

      {hero && <RebatesHeroSection data={hero} />}

      {rebatePrograms && <RebateProgramsSection data={rebatePrograms} />}

      {stcExplainer && <StcExplainerSection data={stcExplainer} />}

      {federalBatteryRebate && <SplitSectionSection data={federalBatteryRebate} />}

      {utilityCards && <UtilityCardsSection data={utilityCards} />}

      {loanBenefits && <LoanBenefitsSection data={loanBenefits} />}

      {eligibilityChecker && <EligibilityCheckerSection data={eligibilityChecker} />}

      {paperworkSection && <SplitSectionSection data={paperworkSection} />}

      {faq && <FaqSection data={faq} />}

      {ctaBanner && <CtaBannerSection data={ctaBanner} />}

    </div>
  );
}
