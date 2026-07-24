import React from "react";
import Hero from "@/reuseables/Hero";
import { strapiImage } from "@/lib/strapi";
import type { DealsHeroData } from "@/lib/strapi-schemas/deals";

interface Props {
  data: DealsHeroData;
}

export default function DealsHeroSection({ data }: Props) {
  const img = strapiImage(data.backgroundImage);

  return (
    <Hero
      mediaSrc={img || ""}
      mediaType="image"
      topSubtitle={data.subtitle || ""}
      mainTitle={data.title || ""}
      description={data.description || ""}
      ctaText={data.ctaText || "Get My Tailored Quote"}
      ctaLink={data.ctaLink || "#quote-form"}
      subtitleColor="text-white"
      titleColor="text-[#63B846]"
      descriptionColor="text-white/90"
      showOverlay={true}
      heightClass="h-[600px]"
    />
  );
}
