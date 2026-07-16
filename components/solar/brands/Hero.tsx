import React from 'react';
import Hero from '@/reuseables/Hero';
import bgHero from '@/assets/solar/brands-tech/hero.png';

const BrandsHero = () => {
  return (
    <Hero
      mediaSrc={bgHero}
      mediaType="image"
      topSubtitle="The Solar Brands"
      mainTitle="We Trust On Perth Roofs."
      description="We Install Only Tier-1 Solar Panels And Premium Hybrid Inverters, Selected For Reliability, Strong Local Support, And Proven Performance Across 45,000+ Installations. No Budget Components, No Subcontractors—Just Quality Systems Built To Last 25 Years."
      ctaText="Get Your Free Quote"
      ctaLink="#quote-form"
      subtitleColor="text-white"
      titleColor="text-[#63B846]"
      descriptionColor="text-white/90"
      showOverlay={true}
    />
  );
};

export default BrandsHero;
