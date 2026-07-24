import React from 'react';
import Hero from '@/reuseables/Hero';
import { strapiImage } from '@/lib/strapi';
import type { ResearchDevelopmentHeroData } from '@/lib/strapi-schemas/research-development';

interface Props {
  data: ResearchDevelopmentHeroData;
}

const RDHero = ({ data }: Props) => {
  const bg = strapiImage(data.backgroundImage);
  if (!bg) return null;

  return (
    <Hero
      mediaSrc={bg}
      mediaType="image"
      topSubtitle={data.subtitle || ''}
      mainTitle={data.mainTitle || ''}
      description={data.description || ''}
      ctaText={data.ctaText || 'Get Your Free Quote'}
      ctaLink={data.ctaLink || '#quote-form'}
      subtitleColor="text-white"
      descriptionColor="text-white"
      showOverlay={true}
      isFullScreen={false}
      heightClass="min-h-[640px] md:min-h-[720px]"
    />
  );
};

export default RDHero;
