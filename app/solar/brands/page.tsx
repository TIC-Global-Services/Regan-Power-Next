import React from "react";
import { getBrandsPage } from "@/lib/strapi";
import type {
  BrandsHeroData,
  BrandsPhilosophyData,
  BrandsTier1MeansData,
  BrandsGridData,
  BrandsHybridSpecialtyData,
  BrandsInvertersSliderData,
  BrandsCriteriaListData,
} from "@/lib/strapi-schemas/brands";
import type { BrandsSpecsTableData } from "@/lib/strapi-schemas/brands";

import BrandsHeroSection from "@/components/solar/brands/BrandsHeroSection";
import PhilosophySection from "@/components/solar/brands/PhilosophySection";
import Tier1MeansSection from "@/components/solar/brands/Tier1MeansSection";
import BrandsGridSection from "@/components/solar/brands/BrandsGridSection";
import HybridSpecialtySection from "@/components/solar/brands/HybridSpecialtySection";
import InvertersSliderSection from "@/components/solar/brands/InvertersSliderSection";
import CriteriaListSection from "@/components/solar/brands/CriteriaListSection";
import SpecsTableSection from "@/components/solar/brands/SpecsTableSection";

import FAQ from "@/components/solar/brands/FAQ";
import LeadCaptureForm from "@/components/solar/LeadCaptureForm";
import GetSolar from "@/reuseables/getsolar";
import getSolarBg from "@/assets/solar/footer.png";

export const revalidate = 60;

const SolarBrandsPage = async () => {
  const { data } = await getBrandsPage();
  const sections = data.sections ?? [];

  const hero = sections.find(
    (s) => s.__component === "brands.hero"
  ) as BrandsHeroData | undefined;
  const philosophy = sections.find(
    (s) => s.__component === "brands.philosophy"
  ) as BrandsPhilosophyData | undefined;
  const tier1 = sections.find(
    (s) => s.__component === "brands.tier1-means"
  ) as BrandsTier1MeansData | undefined;
  const brandsGrid = sections.find(
    (s) => s.__component === "brands.brands-grid"
  ) as BrandsGridData | undefined;
  const hybrid = sections.find(
    (s) => s.__component === "brands.hybrid-specialty"
  ) as BrandsHybridSpecialtyData | undefined;
  const inverters = sections.find(
    (s) => s.__component === "brands.inverters-slider"
  ) as BrandsInvertersSliderData | undefined;
  const criteria = sections.find(
    (s) => s.__component === "brands.criteria-list"
  ) as BrandsCriteriaListData | undefined;
  const specsTable = sections.find(
    (s) => s.__component === "brands.specs-table"
  ) as BrandsSpecsTableData | undefined;

  return (
    <div className="bg-white min-h-screen text-black">
      {hero && <BrandsHeroSection data={hero} />}
      {philosophy && <PhilosophySection data={philosophy} />}
      {tier1 && <Tier1MeansSection data={tier1} />}
      {brandsGrid && <BrandsGridSection data={brandsGrid} />}

      {specsTable && <SpecsTableSection data={specsTable} />}

      {hybrid && <HybridSpecialtySection data={hybrid} />}
      {inverters && <InvertersSliderSection data={inverters} />}
      {criteria && <CriteriaListSection data={criteria} />}

      <FAQ />

      <div id="quote-form">
        <LeadCaptureForm />
      </div>

      <GetSolar
        subtitle="Get A Solar System Designed"
        mainTitle="For Your Home"
        description="Tell us a few details about your home and power use, and one of our Perth-based CEC-accredited designers will build a system tailored to your roof, your household, and your budget. Free, no-obligation, and no high-pressure sales calls \u2014 just a proper engineering recommendation."
        buttonText="Get My Free Quote"
        bgImage={getSolarBg}
      />
    </div>
  );
};

export default SolarBrandsPage;
