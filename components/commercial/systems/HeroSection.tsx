import React from "react";
import Hero from "@/reuseables/Hero";
import { strapiImage } from "@/lib/strapi";
import type { CommercialSystemsHeroData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsHeroData;
}

export default function HeroSection({ data }: Props) {
  const bg = strapiImage(data.backgroundImage);
  if (!bg) return null;

  return (
    <Hero
      mediaSrc={bg}
      mediaType="image"
      topSubtitle={data.subtitle || ""}
      mainTitle={data.mainTitle || ""}
      description={data.description || ""}
      ctaText={data.ctaText || "Book Energy Assessment"}
      ctaLink={data.ctaLink || "#quote-form"}
      subtitleColor="text-white"
      descriptionColor="text-white"
      showOverlay={true}
      isFullScreen={false}
      heightClass="min-h-[640px] md:min-h-[720px]"
    />
  );
}
