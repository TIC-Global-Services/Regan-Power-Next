import React from "react";
import { getDealsPage } from "@/lib/strapi";
import type {
  DealsHeroData,
  DealsPhilosophyData,
  DealsGridData,
  DealsSplitSectionData,
  DealsWaysToPayData,
  DealsWhyMattersData,
  DealsFaqData,
  DealsCtaBannerData,
} from "@/lib/strapi-schemas/deals";
import type { SolarPackagesData } from "@/lib/strapi-schemas/solar";

import DealsHeroSection from "@/components/solar/deals/DealsHeroSection";
import DealsPhilosophySection from "@/components/solar/deals/DealsPhilosophySection";
import DealsGridSection from "@/components/solar/deals/DealsGridSection";
import SplitSectionSection from "@/components/solar/deals/SplitSectionSection";
import SolarPackages from "@/components/solar/SolarPackages";
import WaysToPaySection from "@/components/solar/deals/WaysToPaySection";
import WhyMattersSection from "@/components/solar/deals/WhyMattersSection";
import FaqSection from "@/components/solar/deals/FaqSection";
import CtaBannerSection from "@/components/solar/deals/CtaBannerSection";
import LeadCaptureForm from "@/components/solar/LeadCaptureForm";

export const revalidate = 60;

export default async function SolarDealsPage() {
  const { data } = await getDealsPage();
  const sections = data.sections ?? [];

  const hero = sections.find(
    (s) => s.__component === "deals.hero"
  ) as DealsHeroData | undefined;
  const philosophy = sections.find(
    (s) => s.__component === "deals.philosophy"
  ) as DealsPhilosophyData | undefined;
  const dealsGrid = sections.find(
    (s) => s.__component === "deals.deals-grid"
  ) as DealsGridData | undefined;
  const splitSection = sections.find(
    (s) => s.__component === "shared.split-section"
  ) as DealsSplitSectionData | undefined;
  const packages = sections.find(
    (s) => s.__component === "solar.packages"
  ) as SolarPackagesData | undefined;
  const waysToPay = sections.find(
    (s) => s.__component === "deals.ways-to-pay"
  ) as DealsWaysToPayData | undefined;
  const whyMatters = sections.find(
    (s) => s.__component === "deals.why-matters"
  ) as DealsWhyMattersData | undefined;
  const faq = sections.find(
    (s) => s.__component === "shared.faq"
  ) as DealsFaqData | undefined;
  const ctaBanner = sections.find(
    (s) => s.__component === "shared.cta-banner"
  ) as DealsCtaBannerData | undefined;

  return (
    <div className="bg-white min-h-screen text-black">

      {hero && <DealsHeroSection data={hero} />}

      {philosophy && <DealsPhilosophySection data={philosophy} />}

      {dealsGrid && <DealsGridSection data={dealsGrid} />}

      {splitSection && <SplitSectionSection data={splitSection} />}

      {packages && <SolarPackages data={packages} />}

      {waysToPay && <WaysToPaySection data={waysToPay} />}

      {whyMatters && <WhyMattersSection data={whyMatters} />}

      {faq && <FaqSection data={faq} />}

      <div id="quote-form">
        <LeadCaptureForm />
      </div>

      {ctaBanner && <CtaBannerSection data={ctaBanner} />}

    </div>
  );
}
