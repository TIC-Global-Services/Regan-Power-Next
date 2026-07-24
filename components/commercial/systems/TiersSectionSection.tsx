import React from "react";
import ThreeTiersSection from "@/components/commercial/ThreeTiersSection";
import { strapiImage } from "@/lib/strapi";
import type { CommercialSystemsTiersSectionData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsTiersSectionData;
}

export default function TiersSection({ data }: Props) {
  return (
    <ThreeTiersSection
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      description={data.description || ""}
      tiers={data.tiers.map((t) => ({
        title: t.title,
        subtitle: t.subtitle,
        description: t.description,
        image: strapiImage(t.image) || "",
        details: t.details.map((d) => ({ label: d.label, value: d.value })),
        ctaText: t.ctaText,
        ctaHref: t.ctaHref,
      }))}
    />
  );
}
