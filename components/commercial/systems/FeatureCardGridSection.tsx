import React from "react";
import FeatureCardGrid from "@/reuseables/FeatureCardGrid";
import { strapiImage } from "@/lib/strapi";
import type { CommercialSystemsFeatureCardGridData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsFeatureCardGridData;
}

export default function FeatureCardGridSection({ data }: Props) {
  return (
    <FeatureCardGrid
      topSubtitle={data.topSubtitle || ""}
      title={data.title || ""}
      bottomSubtitle={data.bottomSubtitle || ""}
      showReadMore={true}
      cards={data.cards.map((c) => ({
        title: c.title,
        description: c.description,
        image: strapiImage(c.image) || "",
        textPosition: (c.textPosition as "top" | "bottom") || "top",
        footerTitle: c.footerTitle || undefined,
        footerDescription: c.footerDescription || undefined,
      }))}
    />
  );
}
