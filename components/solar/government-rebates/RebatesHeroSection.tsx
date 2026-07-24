import React from "react";
import Hero from "@/reuseables/Hero";
import { strapiImage } from "@/lib/strapi";
import type { RebatesHeroData } from "@/lib/strapi-schemas/rebates";

interface Props {
  data: RebatesHeroData;
}

export default function RebatesHeroSection({ data }: Props) {
  const img = strapiImage(data.backgroundImage);

  return (
    <Hero
      mediaSrc={img || ""}
      mediaType="image"
      topSubtitle={data.subtitle || ""}
      mainTitle={data.title || ""}
      description={data.description || ""}
      ctaText={data.ctaText || "Get Your Free Quote"}
      ctaLink={data.ctaLink || "#quote-form"}
      subtitleColor="text-white"
      titleColor="text-[#63B846]"
      descriptionColor="text-white/95"
      showOverlay
      heightClass="h-[600px]"
    />
  );
}
