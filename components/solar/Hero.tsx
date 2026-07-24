import React from "react";
import Hero from "@/reuseables/Hero";
import MissingImage from "@/reuseables/MissingImage";
import { strapiImage } from "@/lib/strapi";
import type { SolarHeroData } from "@/lib/strapi-schemas/solar";

interface SolarHeroProps {
  data: SolarHeroData;
}

const HeroSection: React.FC<SolarHeroProps> = ({ data }) => {
  const imageUrl = data.backgroundImage ? strapiImage(data.backgroundImage) : "";

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
          descriptionColor="text-white"
          showOverlay={true}
        />
      ) : (
        <MissingImage
          label="Hero background image"
          aspect="aspect-[16/9] md:aspect-[21/9]"
        />
      )}
    </div>
  );
};

export default HeroSection;
