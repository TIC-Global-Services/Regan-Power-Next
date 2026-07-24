import React from "react";
import Hero from "@/reuseables/Hero";
import MissingImage from "@/reuseables/MissingImage";
import { strapiImage } from "@/lib/strapi";
import type { BrandsHeroData } from "@/lib/strapi-schemas/brands";

interface BrandsHeroSectionProps {
  data: BrandsHeroData;
}

const BrandsHeroSection: React.FC<BrandsHeroSectionProps> = ({ data }) => {
  const imageUrl = data.backgroundImage
    ? strapiImage(data.backgroundImage)
    : "";

  return (
    <div>
      {imageUrl ? (
        <Hero
          mediaSrc={imageUrl}
          mediaType="image"
          topSubtitle={data.subtitle ?? ""}
          mainTitle={data.title ?? ""}
          description={data.description ?? ""}
          ctaText={data.ctaText ?? ""}
          ctaLink={data.ctaLink ?? "#quote-form"}
          subtitleColor="text-white"
          titleColor="text-[#63B846]"
          descriptionColor="text-white/90"
          showOverlay={true}
        />
      ) : (
        <MissingImage
          label="Brands hero background image"
          aspect="aspect-[16/9] md:aspect-[21/9]"
        />
      )}
    </div>
  );
};

export default BrandsHeroSection;
