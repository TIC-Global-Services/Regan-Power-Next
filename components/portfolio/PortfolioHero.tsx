import React from 'react';
import Hero from '@/reuseables/Hero';
import heroBg from '@/assets/portfolio/hero.png';

const PortfolioHero = () => {
    return (
        <Hero
            mediaSrc={heroBg}
            mediaType="image"
            topSubtitle="Our Work Across"
            mainTitle="Western Australia"
            description="80+ Installations Across Commercial, Residential, Off-Grid, And EV Charging—Designed In-House And Installed By Regen Electricians. Filter By Industry, Size, Or Location, And Explore Each Project In Detail."
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

export default PortfolioHero;
