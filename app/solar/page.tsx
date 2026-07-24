import React from "react";
import { getSolarPage } from "@/lib/strapi";
import type {
  SolarHeroData,
  SolarStatsAndIntroData,
  SolarProcessStepsData,
  SolarBrandsGridData,
  SolarInverterSliderData,
  SolarSpecsTableData,
  SolarSizingGuideData,
  SolarPackagesData,
  SolarTimelineData,
  SolarEngineeringItemsData,
} from "@/lib/strapi-schemas/solar";

import HeroSection from "@/components/solar/Hero";
import SolarStatsAndIntro from "@/components/solar/SolarStatsAndIntro";
import SolarProcessFlow from "@/components/solar/SolarProcessFlow";
import SolarBrandsGrid from "@/components/solar/SolarBrandsGrid";
import InverterSlider from "@/components/solar/InverterSlider";
import SpecsAccordion from "@/components/solar/SpecsAccordion";
import SizingGuide from "@/components/solar/SizingGuide";
import SolarPackages from "@/components/solar/SolarPackages";
import TimelineSection from "@/components/solar/TimelineSection";
import EngineeringCustomizations from "@/components/solar/EngineeringCustomizations";

import FAQ from "@/reuseables/faq";
import GetSolar from "@/reuseables/getsolar";
import LeadCaptureForm from "@/components/solar/LeadCaptureForm";

export const revalidate = 60;

const SolarPage = async () => {
  const { data } = await getSolarPage();
  const sections = data.sections ?? [];

  const hero = sections.find(
    (s) => s.__component === "solar.hero"
  ) as SolarHeroData | undefined;
  const stats = sections.find(
    (s) => s.__component === "solar.stats-and-intro"
  ) as SolarStatsAndIntroData | undefined;
  const process = sections.find(
    (s) => s.__component === "solar.process-steps"
  ) as SolarProcessStepsData | undefined;
  const brands = sections.find(
    (s) => s.__component === "solar.brands-grid"
  ) as SolarBrandsGridData | undefined;
  const inverters = sections.find(
    (s) => s.__component === "solar.inverter-slider"
  ) as SolarInverterSliderData | undefined;
  const specs = sections.find(
    (s) => s.__component === "solar.specs-table"
  ) as SolarSpecsTableData | undefined;
  const sizing = sections.find(
    (s) => s.__component === "solar.sizing-guide"
  ) as SolarSizingGuideData | undefined;
  const packages = sections.find(
    (s) => s.__component === "solar.packages"
  ) as SolarPackagesData | undefined;
  const timeline = sections.find(
    (s) => s.__component === "solar.timeline"
  ) as SolarTimelineData | undefined;
  const engineering = sections.find(
    (s) => s.__component === "solar.engineering-items"
  ) as SolarEngineeringItemsData | undefined;

  return (
    <div className="bg-white min-h-screen text-black">
      {hero && <HeroSection data={hero} />}
      {stats && <SolarStatsAndIntro data={stats} />}
      {process && <SolarProcessFlow data={process} />}
      {brands && <SolarBrandsGrid data={brands} />}
      {inverters && <InverterSlider data={inverters} />}
      {specs && <SpecsAccordion data={specs} />}
      {sizing && <SizingGuide data={sizing} />}
      {packages && <SolarPackages data={packages} />}
      {timeline && <TimelineSection data={timeline} />}
      {engineering && <EngineeringCustomizations data={engineering} />}

      <FAQ topTitle="Solar System" />

      <LeadCaptureForm />

      <GetSolar
        subtitle="Get A Solar System Designed"
        mainTitle="For Your Home"
        description="Tell us a few details about your home and power use, and one of our Perth-based CEC-accredited designers will build a system tailored to your roof, your household, and your budget. Free, no-obligation, and no high-pressure sales calls \u2014 just a proper engineering recommendation."
        buttonText="Get My Free Quote"
      />
    </div>
  );
};

export default SolarPage;
