import React from "react";
import { getCommercialOffGridPage } from "@/lib/strapi";
import type {
  CommercialOffGridHeroData,
  SharedEditorialSectionData,
  CommercialOffGridSolutionsPortfolioData,
  SharedCtaBannerData,
} from "@/lib/strapi-schemas/commercial";

import HeroSection from "@/components/commercial/off-grid/HeroSection";
import EditorialSection from "@/components/commercial/off-grid/EditorialSectionSection";
import SolutionsPortfolioSection from "@/components/commercial/off-grid/SolutionsPortfolioSection";
import CtaBannerSection from "@/components/commercial/off-grid/CtaBannerSection";

export const revalidate = 60;

export default async function CommercialOffGridPage() {
  const { data } = await getCommercialOffGridPage();
  const sections = data.sections ?? [];

  const hero = sections.find(
    (s) => s.__component === "commercial-off-grid.hero"
  ) as CommercialOffGridHeroData | undefined;
  const editorial = sections.find(
    (s) => s.__component === "shared.editorial-section"
  ) as SharedEditorialSectionData | undefined;
  const portfolio = sections.find(
    (s) => s.__component === "commercial-off-grid.solutions-portfolio"
  ) as CommercialOffGridSolutionsPortfolioData | undefined;
  const ctaBanner = sections.find(
    (s) => s.__component === "shared.cta-banner"
  ) as SharedCtaBannerData | undefined;

  return (
    <div className="bg-white min-h-screen text-black">
      {hero && <HeroSection data={hero} />}

      {editorial && <EditorialSection data={editorial} />}

      {portfolio && <SolutionsPortfolioSection data={portfolio} />}

      {ctaBanner && <CtaBannerSection data={ctaBanner} />}
    </div>
  );
}
