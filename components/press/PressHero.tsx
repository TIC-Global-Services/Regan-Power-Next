import React from 'react';
import Hero from '@/reuseables/Hero';
import heroBg from '@/assets/press/hero.png';

const PressHero = () => {
    return (
        <Hero
            mediaSrc={heroBg}
            mediaType="image"
            topSubtitle="In The"
            mainTitle="News & Media"
            description="Explore How Regen Power Is Shaping The Future Of Energy Through Innovation, Impact, And Industry Leadership."
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

export default PressHero;
