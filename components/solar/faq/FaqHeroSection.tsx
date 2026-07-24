import React from "react";
import Hero from "@/reuseables/Hero";
import { strapiImage } from "@/lib/strapi";
import type { FaqHeroData } from "@/lib/strapi-schemas/faq";

interface Props {
  data: FaqHeroData;
}

export default function FaqHeroSection({ data }: Props) {
  const img = strapiImage(data.backgroundImage);
  if (!img) return null;

  return (
    <Hero
      mediaSrc={img}
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
