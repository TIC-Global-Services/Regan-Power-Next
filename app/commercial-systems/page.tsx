import React from "react";
import { getCommercialSystemsPage } from "@/lib/strapi";
import type {
  CommercialSystemsHeroData,
  CommercialSystemsStatsCardGridData,
  CommercialSystemsTiersSectionData,
  CommercialSystemsComponentsSectionData,
  CommercialSystemsIndustriesSectionData,
  CommercialSystemsFeatureCardGridData,
  CommercialSystemsWatchSystemSectionData,
  CommercialSystemsPackagesGridData,
  CommercialSystemsProcessFlowData,
  CommercialSystemsFiveThingsSectionData,
  SharedFaqData,
  CommercialSystemsCommercialFormData,
  SharedCtaBannerData,
} from "@/lib/strapi-schemas/commercial";

import HeroSection from "@/components/commercial/systems/HeroSection";
import StatsCardGridSection from "@/components/commercial/systems/StatsCardGridSection";
import TiersSection from "@/components/commercial/systems/TiersSectionSection";
import ComponentsSection from "@/components/commercial/systems/ComponentsSectionSection";
import IndustriesSection from "@/components/commercial/systems/IndustriesSectionSection";
import FeatureCardGridSection from "@/components/commercial/systems/FeatureCardGridSection";
import WatchSystemSection from "@/components/commercial/systems/WatchSystemSectionSection";
import PackagesGridSection from "@/components/commercial/systems/PackagesGridSection";
import ProcessFlowSection from "@/components/commercial/systems/ProcessFlowSection";
import FiveThingsSection from "@/components/commercial/systems/FiveThingsSectionSection";
import FaqSection from "@/components/commercial/systems/FaqSection";
import CommercialFormSection from "@/components/commercial/systems/CommercialFormSection";
import CtaBannerSection from "@/components/commercial/systems/CtaBannerSection";

export const revalidate = 60;

export default async function CommercialSystemsPage() {
  const { data } = await getCommercialSystemsPage();
  const sections = data.sections ?? [];

  const hero = sections.find(
    (s) => s.__component === "commercial-systems.hero"
  ) as CommercialSystemsHeroData | undefined;
  const stats = sections.find(
    (s) => s.__component === "commercial-systems.stats-card-grid"
  ) as CommercialSystemsStatsCardGridData | undefined;
  const tiers = sections.find(
    (s) => s.__component === "commercial-systems.tiers-section"
  ) as CommercialSystemsTiersSectionData | undefined;
  const components = sections.find(
    (s) => s.__component === "commercial-systems.components-section"
  ) as CommercialSystemsComponentsSectionData | undefined;
  const industries = sections.find(
    (s) => s.__component === "commercial-systems.industries-section"
  ) as CommercialSystemsIndustriesSectionData | undefined;
  const featureCards = sections.find(
    (s) => s.__component === "commercial-systems.feature-card-grid"
  ) as CommercialSystemsFeatureCardGridData | undefined;
  const watchSystem = sections.find(
    (s) => s.__component === "commercial-systems.watch-system-section"
  ) as CommercialSystemsWatchSystemSectionData | undefined;
  const packages = sections.find(
    (s) => s.__component === "commercial-systems.packages-grid"
  ) as CommercialSystemsPackagesGridData | undefined;
  const processFlow = sections.find(
    (s) => s.__component === "commercial-systems.process-flow"
  ) as CommercialSystemsProcessFlowData | undefined;
  const fiveThings = sections.find(
    (s) => s.__component === "commercial-systems.five-things-section"
  ) as CommercialSystemsFiveThingsSectionData | undefined;
  const faq = sections.find(
    (s) => s.__component === "shared.faq"
  ) as SharedFaqData | undefined;
  const commercialForm = sections.find(
    (s) => s.__component === "commercial-systems.commercial-form"
  ) as CommercialSystemsCommercialFormData | undefined;
  const ctaBanner = sections.find(
    (s) => s.__component === "shared.cta-banner"
  ) as SharedCtaBannerData | undefined;

  return (
    <div className="bg-white min-h-screen text-black">
      {hero && <HeroSection data={hero} />}

      {stats && <StatsCardGridSection data={stats} />}

      {tiers && <TiersSection data={tiers} />}

      {components && <ComponentsSection data={components} />}

      {industries && <IndustriesSection data={industries} />}

      {featureCards && <FeatureCardGridSection data={featureCards} />}

      {watchSystem && <WatchSystemSection data={watchSystem} />}

      {packages && <PackagesGridSection data={packages} />}

      {processFlow && <ProcessFlowSection data={processFlow} />}

      {fiveThings && <FiveThingsSection data={fiveThings} />}

      {faq && <FaqSection data={faq} />}

      {commercialForm && <CommercialFormSection data={commercialForm} />}

      {ctaBanner && <CtaBannerSection data={ctaBanner} />}
    </div>
  );
}
