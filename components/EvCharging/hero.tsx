import React from 'react';
import Hero from '@/reuseables/Hero';
import evHeroBg from '@/assets/evcharging/hero_banner.png';

const EvHero = () => {
  return (
    <Hero
      mediaSrc={evHeroBg}
      mediaType="image"
      isFullScreen={false}
      descriptionColor='text-white'
      imageClass='object-cover object-bottom'
      topSubtitle="Smart EV Charging"
      mainTitle="Installing The Future Of Home Charging"
      description="Charge your electric vehicle at home with clean solar energy. Regen Power designs and installs premium EV charging systems integrated with your solar and battery setup — powering your drive with sunshine."
      ctaText="Get A Free EV Charging Quote"
      ctaLink="/contact"
    />
  );
};

export default EvHero;