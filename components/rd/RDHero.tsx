import React from 'react';
import Hero from '@/reuseables/Hero';
import heroBg from '@/assets/rd/hero.png';

const RDHero = () => {
    return (
        <Hero
            mediaSrc={heroBg}
            mediaType="image"
            topSubtitle="Innovating"
            mainTitle="The Future Of Technology"
            description="Advanced Research And Development Driving Next-Generation Renewable Energy Solutions."
            ctaText="Get Your Free Quote"
            ctaLink="#quote-form"
            subtitleColor="text-white"
            descriptionColor="text-white"
            showOverlay={true}
            isFullScreen={false}
            heightClass="min-h-[640px] md:min-h-[720px]"
        />
    );
};

export default RDHero;
