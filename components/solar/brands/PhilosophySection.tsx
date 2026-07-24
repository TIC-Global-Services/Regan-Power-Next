import React from "react";
import EditorialTextSection from "@/reuseables/EditorialTextSection";
import type { BrandsPhilosophyData } from "@/lib/strapi-schemas/brands";

interface PhilosophySectionProps {
  data: BrandsPhilosophyData;
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ data }) => {
  const paragraphs = (data.paragraphs ?? []).map((p) => ({
    text: p.text,
    isSecondary: p.isSecondary,
  }));

  return (
    <EditorialTextSection
      badge={data.badge ?? undefined}
      subtitle={data.subtitle ?? ""}
      title={data.title ?? ""}
      paragraphs={paragraphs}
      align="left"
      subtitleClass="text-lg md:text-2xl text-black font-normal"
      paragraphsClass="text-left max-w-4xl"
      revealEffect
    />
  );
};

export default PhilosophySection;
