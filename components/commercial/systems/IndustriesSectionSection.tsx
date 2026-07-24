import React from "react";
import SixIndustriesSection from "@/components/commercial/SixIndustriesSection";
import { strapiImage } from "@/lib/strapi";
import type { CommercialSystemsIndustriesSectionData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsIndustriesSectionData;
}

export default function IndustriesSection({ data }: Props) {
  return (
    <SixIndustriesSection
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      industries={data.industries.map((ind) => ({
        title: ind.title,
        description: ind.description,
        caseStudy: ind.caseStudy,
        icon: strapiImage(ind.icon) || "",
      }))}
    />
  );
}
