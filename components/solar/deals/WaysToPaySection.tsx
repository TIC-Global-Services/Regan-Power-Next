import React from "react";
import FeatureCardGrid from "@/reuseables/FeatureCardGrid";
import { strapiImage } from "@/lib/strapi";
import type { DealsWaysToPayData } from "@/lib/strapi-schemas/deals";

interface Props {
  data: DealsWaysToPayData;
}

export default function WaysToPaySection({ data }: Props) {
  const cards = data.cards.map((card) => ({
    title: card.title,
    description: card.description,
    image: strapiImage(card.image) || "",
    footerTitle: card.footerTitle || "",
    footerDescription: card.footerDescription || "",
  }));

  return (
    <FeatureCardGrid
      topSubtitle={data.topSubtitle || ""}
      title={data.title || ""}
      bottomSubtitle={data.bottomSubtitle || ""}
      cards={cards}
      showReadMore={false}
    />
  );
}
