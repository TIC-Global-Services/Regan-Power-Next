import Hero from '@/reuseables/Hero';
import bgimage from '../../assets/home/home_hero_bg.png'
import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <Hero
                mediaSrc={bgimage}
                mediaType='image'
                topSubtitle="Step Into the"
                mainTitle="Future of Energy"
                description="WA’s #1 rated solar installer with 45,000+ installations since 2003.
CEC-approved. ProductReview Award Winner 2021–2026."
                ctaText="Get Started"
                ctaLink="/contact"
            />
        </div>
    );
};

export default HeroSection;