import React from "react";
import type { Metadata } from "next";
import { getFaqPage } from "@/lib/strapi";
import type {
  FaqHeroData,
  FaqCategorizedFaqData,
  FaqCtaBannerData,
} from "@/lib/strapi-schemas/faq";

import FaqHeroSection from "@/components/solar/faq/FaqHeroSection";
import CategorizedFaqSection from "@/components/solar/faq/CategorizedFaqSection";
import CtaBannerSection from "@/components/solar/deals/CtaBannerSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Solar FAQ | Regen Power",
  description:
    "Browse engineer-written answers to common Perth solar questions across panels, inverters, batteries, installation, and rebates.",
};

export default async function SolarFaqPage() {
  const { data } = await getFaqPage();
  const sections = data.sections ?? [];

  const hero = sections.find(
    (s) => s.__component === "faq.hero"
  ) as FaqHeroData | undefined;

  const categorizedFaq = sections.find(
    (s) => s.__component === "faq.categorized-faq"
  ) as FaqCategorizedFaqData | undefined;

  const ctaBanner = sections.find(
    (s) => s.__component === "shared.cta-banner"
  ) as FaqCtaBannerData | undefined;

  return (
    <div className="min-h-screen bg-white text-black">

      {hero && <FaqHeroSection data={hero} />}

      {categorizedFaq && <CategorizedFaqSection data={categorizedFaq} />}

      {ctaBanner && <CtaBannerSection data={ctaBanner} />}

    </div>
  );
}
